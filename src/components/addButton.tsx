"use client"

import { Modal } from 'antd';
import React, {useState} from 'react'
import UpdateForm from './updateForm';

const AddButton = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
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
        <div>
            <button onClick={showModal} className="p-2 text-white rounded bg-blue-500 hover:bg-blue-400 active:scale-75 transition-all">Add Student</button>
            <Modal
                loading={loading}
                open={open}
                title="Add Student"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                
                ]}
            >
                <UpdateForm handleCancel={handleCancel} />
            </Modal>
        </div>
    )
}

export default AddButton
