import React from 'react'

const Form = ({formData, onMutateForm}) => {
  // destructure formData
  const {email, name, make, model, modelYear } = formData

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h3 className='mb-5'> Fill out the form before sending a booking</h3>
      <form className='flex flex-col form-control'>
        <input
          type='email'
          placeholder='email'
          id='email'
          className='w-full max-w-xs input input-bordered'
          onChange={onMutateForm}
          value={email}
        />
        <input
          type='text'
          placeholder='name'
          id='name'
          className='w-full max-w-xs input input-bordered'
          onChange={onMutateForm}
          value={name}
        />
        <input
          type='text'
          placeholder='make'
          id='make'
          className='w-full max-w-xs input input-bordered'
          onChange={onMutateForm}
          value={make}
        />
        <input
          type='text'
          placeholder='model'
          id='model'
          className='w-full max-w-xs input input-bordered'
          onChange={onMutateForm}
          value={model}
        />
        <input
          type='text'
          placeholder='modelYear'
          id='modelYear'
          className='w-full max-w-xs input input-bordered'
          onChange={onMutateForm}
          value={modelYear}
        />
      </form>
    </div>
  )
}

export default Form
