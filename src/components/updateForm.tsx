import React from 'react'
import {Form, Input, Button} from 'antd'
import { Student } from '@/services/student'
import { useFormik } from 'formik';
import { studentFormValidation } from '@/validation';
import { updateStudent, createStudent } from '@/services/student';
import { format } from 'path';
import { useRouter } from 'next/navigation';

const UpdateForm = ({student, handleCancel, handleOk}: {student?: Student, handleOk: () => void, handleCancel: () => void}) => {
    
    const router = useRouter();

    const formik = useFormik({
    initialValues: {
      studentName: student ? student.studentName : '',
      fatherName: student ? student.fatherName : '',
      motherName: student ? student.motherName : '',
      dateOfBirth: student ? `${new Date(student.dateOfBirth).getFullYear()}-${new Date(student.dateOfBirth).getMonth()}-${new Date(student.dateOfBirth).getDate()}` : '',
      gender: student ? student.gender : '', 
      aadharNumber: student ? student.aadharNumber : '',
      penNumber: student ? student.penNumber : '',
      cls: student ? student.cls : '',
      dateOfAdmission: student ? `${new Date(student.dateOfAdmission).getFullYear()}-${new Date(student.dateOfAdmission).getMonth()}-${new Date(student.dateOfAdmission).getDate()}` : '',
      admissionNumber: student ? student.admissionNumber : '',
      accountNumber: student ? student.accountNumber : '',
      IFSC: student ? student.IFSC : '',
      nameOfBank: student ? student.nameOfBank : ''
    },
    validationSchema: studentFormValidation,
    onSubmit: async values => {
      const result = student ? await updateStudent(values, student.id) : await createStudent(values);
      handleCancel();
      router.refresh()
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-1'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-1/2'>
            <input type="text" placeholder='Student Name' onChange={formik.handleChange} value={formik.values.studentName} name="studentName" id="studentName" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.studentName && formik.touched.studentName ? (<p className="text-red-600">{formik.errors.studentName}</p>) : null}
          </div>
          <div className='w-1/2'>
            <input type="text" placeholder="Father's Name" onChange={formik.handleChange} value={formik.values.fatherName} name="fatherName" id="fatherName" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.fatherName && formik.touched.fatherName ? (<p className="text-red-600">{formik.errors.fatherName}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-1/2'>
            <input type="text" placeholder="Mother's Name" onChange={formik.handleChange} value={formik.values.motherName} name="motherName" id="motherName" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.motherName && formik.touched.motherName ? (<p className="text-red-600">{formik.errors.motherName}</p>) : null}
          </div>
          <div className='w-1/2'>
            <select onChange={formik.handleChange} className='w-full border border-gray-500 rounded-lg p-2' name="gender" id='gender'>
              <option value="" selected disabled hidden>Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.errors.gender && formik.touched.gender ? (<p className="text-red-600">{formik.errors.gender}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-1/2'>
            <input type="text" placeholder="Aadhar Number" onChange={formik.handleChange} value={formik.values.aadharNumber} name="aadharNumber" id="aadharNumber" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.aadharNumber && formik.touched.aadharNumber ? (<p className="text-red-600">{formik.errors.aadharNumber}</p>) : null}
          </div>
          <div className='w-1/2'>
            <input type="text" placeholder='PEN Number' onChange={formik.handleChange} value={formik.values.penNumber} name="penNumber" id="penNumber" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.penNumber && formik.touched.penNumber ? (<p className="text-red-600">{formik.errors.penNumber}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-1/2'>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" placeholder='Date of Birth'onChange={formik.handleChange}  value={formik.values.dateOfBirth} name="dateOfBirth" id="dateOfBirth" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (<p className="text-red-600">{formik.errors.dateOfBirth}</p>) : null}
          </div>
          <div className='w-1/2'>
            <label htmlFor="dateofAdmission">Date of Admission</label>
            <input type="date" placeholder='Date of Admission' onChange={formik.handleChange} value={formik.values.dateOfAdmission} name="dateOfAdmission" id="dateOfAdmission" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.dateOfAdmission && formik.touched.dateOfAdmission ? (<p className="text-red-600">{formik.errors.dateOfAdmission}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-1/2'>
            <input type="number" placeholder="Current Class" onChange={formik.handleChange} value={formik.values.cls} name="cls" id="cls" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.cls && formik.touched.cls ? (<p className="text-red-600">{formik.errors.cls}</p>) : null}
          </div>
          <div className='w-1/2'>
            <input type="text" placeholder='Admission Number' onChange={formik.handleChange} value={formik.values.admissionNumber} name="admissionNumber" id="admissionNumber" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.admissionNumber && formik.touched.admissionNumber ? (<p className="text-red-600">{formik.errors.admissionNumber}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-full'>
            <input type="text" placeholder="Account Number" onChange={formik.handleChange} value={formik.values.accountNumber} name="accountNumber" id="accountNumber" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.accountNumber && formik.touched.accountNumber ? (<p className="text-red-600">{formik.errors.accountNumber}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='w-1/2'>
            <input type="text" placeholder="IFSC Code" onChange={formik.handleChange} value={formik.values.IFSC} name="IFSC" id="IFSC" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.IFSC && formik.touched.IFSC ? (<p className="text-red-600">{formik.errors.IFSC}</p>) : null}
          </div>
          <div className='w-1/2'>
            <input type="text" placeholder='Name of Bank' onChange={formik.handleChange} value={formik.values.nameOfBank} name="nameOfBank" id="nameOfBank" className='w-full border border-gray-500 rounded-lg p-2' />
            {formik.errors.nameOfBank && formik.touched.nameOfBank ? (<p className="text-red-600">{formik.errors.nameOfBank}</p>) : null}
          </div>
        </div>
        <div className='flex flex-row gap-2 mt-4 justify-end'>
          <button className='p-2 bg-red-500 text-white rounded-md hover:bg-red-300 active:scale-75 transition-all' onClick={handleCancel}>Cancle</button>
          <button className='p-2 bg-blue-500 text-white rounded-md hover:bg-blue-300 active:scale-75 transition-all' type="submit">{student ? "Update Student" : "Create Student"}</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateForm
