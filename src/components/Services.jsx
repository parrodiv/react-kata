import React, { useEffect, useState } from 'react'
import ServiceItem from './library/ServiceItem'
import Form from '../components/library/Form'

import { getServices} from 'utils/services'


const Services = () => {
  const [services, setServices] = useState([])
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    make: "",
    model: "",
    modelYear: ""
  })

  useEffect(() => {
    const getServicesAsync = async () => {
      const data = await getServices()
      setServices(data)
    }
    getServicesAsync()
  }, [])

  const onMutateForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section>
      <Form formData={formData} onMutateForm={onMutateForm} />
      <h1 className='mt-5 h1'>Select a service</h1>
      {services.map(({ id, serviceName, serviceDuration }) => (
        <ServiceItem
          key={id}
          id={id}
          formData={formData}
          serviceName={serviceName}
          serviceDuration={serviceDuration}
        />
      ))}
    </section>
  )
}

export default Services
