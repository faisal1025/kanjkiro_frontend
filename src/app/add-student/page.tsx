import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center p-20'>
      <form className='flex flex-col justify-center items-start gap-4 border-2 border-white rounded-2xl p-8'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <label htmlFor="name">Student Name</label>
          <input className='p-4 rounded bg-transparent border-2 w-96 border-blue-600' type="text" name="stdname" id="name"  />
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <label htmlFor="roll">Student Roll</label>
          <input className='p-4 rounded bg-transparent border-2 w-96 border-blue-600' type="number" name="stdroll" id="roll"  />
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <label htmlFor="email">email</label>
          <input className='p-4 rounded bg-transparent border-2 w-96 border-blue-600' type="email" name="stdemail" id="email"  />
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <label htmlFor="aadhar">Aadhar Number</label>
          <input className='p-4 rounded bg-transparent border-2 w-96 border-blue-600' type="number" name="stdaadhar" id="aadhar"  />
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <label htmlFor="pen">PEN Number</label>
          <input className='p-4 rounded bg-transparent border-2 w-96 border-blue-600' type="number" name="stdpen" id="pen"  />
        </div>
        <button className='border-2 border-green-700 p-2 rounded-md' type='submit'>Add Student</button>
      </form>
    </div>
  )
}

export default page
