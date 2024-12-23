'use client'
import React, {useState} from 'react'
import {Student, deleteStudent} from '../services/student'
import moment from 'moment'
import Image from 'next/image'
import { Modal } from 'antd'
import UpdateForm from './updateForm'
import { useRouter } from 'next/navigation'


const ShowStudentTable = ({data}: {data: Student[]}) => {
    const router = useRouter()

  const [id, setId] = useState<number>(0)
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // Delete Modal
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const showDeleteModal = () => {
    setOpenDelete(true)
  }

  const handleDeleteOk = async (id: number) => {
    setLoadingDelete(true);
    const result = await deleteStudent(id);
    console.log(result);
    setLoadingDelete(false)
    setOpenDelete(false)
    router.refresh()
  }

  const handleDeleteCancel = () => {
    setOpenDelete(false);
  }

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className='p-5'>
        <table className='w-full'>
            <thead className='rounded dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-700 bg-gradient-to-b from-slate-300 to-slate-100 border-b-2 border-grey-200'>
                <tr>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Student Name</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Father Name</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Mother Name</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>DOB</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Gender</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Aadhar</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>PEN</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Class</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>DOA</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Admission No.</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>A/C No.</th>                    
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>IFSC Code</th>                    
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Bank Name</th>                    
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student) => {
                        return (
                            <tr className='rounded dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-700 bg-gradient-to-b from-slate-300 to-slate-100 border-b-2 border-grey-200' key={student.id}>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.studentName}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.fatherName}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.motherName}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{moment(student.dateOfBirth).format('DD-MM-YYYY')}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.gender}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.aadharNumber}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.penNumber}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.cls}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{moment(student.dateOfAdmission).format('DD-MM-YYYY')}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.admissionNumber}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.accountNumber}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.IFSC}</td>
                               <td className='p-3 text-sm text-grey-700 text-left'>{student.nameOfBank}</td>
                               <td className='relative p-3 text-sm text-grey-700 text-left'>
                                    <Image
                                        src="three-dots.svg"
                                        alt="three dots icon for action"
                                        width="20"
                                        height="20"
                                        onClick={() => setId(student.id)}
                                    />
                                    {id === student.id &&
                                        <div className='absolute right-10 z-10 dark:bg-slate-800 bg-slate-300 w-full border-2 border-gray-200 rounded-lg p-1 gap-2 flex flex-col'>
                                            <div onClick={showModal} className='cursor-pointer gap-2 flex items-start border-b-2 border-b-gray-50'>
                                                <Image
                                                    src="edit.svg"
                                                    alt="edit icon for edit action"
                                                    width="15"
                                                    height="15"
                                                    onClick={() => setId(student.id)}
                                                /> 
                                                <span>Edit</span>
                                            </div>
                                            <Modal
                                                loading={loading}
                                                open={open}
                                                title="Update Student"
                                                onOk={handleOk}
                                                onCancel={handleCancel}
                                                footer={[
                                               
                                                ]}
                                            >
                                                <UpdateForm student={student} handleCancel={handleCancel} />
                                            </Modal>
                                          
                                            <div onClick={showDeleteModal} className='cursor-pointer gap-2 flex items-start'>
                                                <Image
                                                    src="delete.svg"
                                                    alt="delete icon for delete action"
                                                    width="15"
                                                    height="15"
                                                    onClick={() => setId(student.id)}
                                                />
                                                <span>Delete</span>
                                            </div>
                                            <Modal
                                                loading={loadingDelete}
                                                open={openDelete}
                                                title="Delete Student"
                                                onOk={() => handleDeleteOk(student.id)}
                                                onCancel={handleDeleteCancel}
                                            >
                                                <div>
                                                    Do you want to delete this student ? 
                                                </div>
                                            </Modal>
                                           
                                        </div>
                                    } 
                               </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowStudentTable
