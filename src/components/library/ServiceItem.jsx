import React, { useState } from 'react'
import oilIcon from '../../assets/images/oil-change-icon.svg'
import tiresIcon from '../../assets/images/tires-icon.svg'
import detailIcon from '../../assets/images/detail-icon.svg'
import brakeIcon from '../../assets/images/disc-brake.svg'
import { getAppointments, postAppointment } from 'utils/services'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

import { toast } from 'react-toastify'
import { format } from 'date-fns'

const ServiceItem = ({ serviceName, id, formData }) => {
  const [appointments, setAppointments] = useState([])
  const [selectedApptID, setSelectedApptId] = useState(null)
  // console.log(formData)
  const navigate = useNavigate()

  // console.log(id)
  // console.log(appointments)

  const getAppts = async () => {
    const data = await getAppointments(id)
    setAppointments(data)
  }

  // console.log(selectedApptID)

  const onSubmitBook = async (e) => {
    e.preventDefault()
    console.log('submit')

    //how iterate object key and value in js?

    try {
      for (let value of Object.values(formData)) {
        // console.log(value)
        if (value === '') {
          toast.error('Compilare tutti i campi')
          return
        }
      }
      const data = await postAppointment(selectedApptID, formData)
      toast.success('Prenotazione completata!')
      console.log(data)
      navigate('/')
      return data
    } catch (error) {
      alert(error)
    }
  }

  return (
    <article className='collapse collapse-arrow mb-4 w-full max-w-[700px] mx-auto rounded-box border border-base-300 shadow-2xl bg-gray-100'>
      <input type='checkbox' className='peer' onClick={getAppts} />
      <div className='flex items-center gap-10 font-bold text-black collapse-title '>
        <img
          src={
            serviceName === 'Brake Inspection'
              ? brakeIcon
              : serviceName === 'Synthetic Oil Change'
              ? oilIcon
              : serviceName === 'Tire Rotation & Inspection'
              ? tiresIcon
              : detailIcon
          }
          alt='icon'
          className='w-[66px]'
        />
        <span className='text-xl md:text-3xl '>{serviceName}</span>
      </div>
      <div className='text-xl border-black collapse-content md:text-2xl peer-checked:border-top-2'>
        Available Appointments
        <form onSubmit={onSubmitBook}>
          <div className='form-control max-w-[500px] pl-[30px]'>
            {appointments.map(({ id, apptStartTime }, index) => (
              <label key={index} className='cursor-pointer label'>
                <input
                  data-appt-id={id}
                  type='radio'
                  name='radio'
                  className='radio checked:bg-blue-500'
                  onClick={(e) => setSelectedApptId(e.target.dataset.apptId)}
                />
                <span className='w-full ml-[10px] text-left text-blue-500 label-text'>
                  {format(new Date(apptStartTime), 'iiii, MMMM Qo HH:mm a') ||
                    'no date'}
                </span>
              </label>
            ))}
          </div>
          <div className='text-left pl-[30px]'>
            <Button type='submit' buttonName='Book Now' />
          </div>
        </form>
      </div>
    </article>
  )
}

export default ServiceItem
