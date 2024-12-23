import * as yup from 'yup'

export const studentFormValidation = yup.object({
    studentName: yup.string().min(2).max(30).required('Student name is required'),
    fatherName: yup.string().min(2).max(30).required('Father name is required'),
    motherName: yup.string().min(2).max(30).required('Mother name is required'),
    dateOfBirth: yup.date().required('date of birth is required'),
    gender: yup.string().required("Please choose student gender"), 
    aadharNumber: yup.string().min(12, "Aadhar must contain 12 digits").required('Please enter Aadhar number'),
    penNumber: yup.string().min(9, "PEN must contain 9 digits").required('Please enter PEN number'),
    cls: yup.number().min(1).max(10).required('Please enter current class'),
    dateOfAdmission: yup.date().required('date of admission is required'),
    admissionNumber: yup.string().required('Please enter Admission number'),
    accountNumber: yup.string().min(10, 'Bank account must contain atlest 10 digits').required('Bank Account number is required'),
    IFSC: yup.string().min(11, "IFSC must contain 11 digits").required('Bank IFSC Code is required'),
    nameOfBank: yup.string().min(2).max(50).required('Bank name is required')
})