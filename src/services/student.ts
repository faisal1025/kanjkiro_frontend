
const base_api = process.env.NODE_ENV === 'development' ? process.env.api_local : process.env.api_prod

enum Gender {
    Male,
    Female,
    Other
}

export interface Student{
    id: number,
    createdAt: Date,
    updatedAt: Date,
    studentName: string,
    fatherName: string
    motherName: string,
    dateOfBirth: Date,
    gender: Gender, 
    aadharNumber: string,
    penNumber: string,
    cls: number,
    dateOfAdmission: Date,
    admissionNumber: string,
    accountNumber: string,
    IFSC: string,
    nameOfBank: string
}

export interface pagination {
    page: number,
    pageSize:  number,
    pageCount: number,
    total: number
}

export async function getStudents(query: string, page: string): Promise<{data: Student[], pagination: pagination}>{

    try {
        const student = await fetch(`${base_api}/student/getall?query=${query}&page=${page}`, {cache: 'no-store'})
        if (!student.ok) {
            throw new Error(`Response status: ${student.status}`);
        }
        return student.json();
    } catch (error) {
        throw error;
    }
}
export async function updateStudent(values: any, id: number): Promise<Student>{
    try {
        const student = await fetch(`${base_api}/student/update/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(values),
            cache: 'no-cache'
        })
        if (!student.ok) {
            throw new Error(`Response status: ${student.status}`);
        }
        return student.json();
    } catch (error) {
        throw error;
    }
}
export async function createStudent(values: any): Promise<Student>{
    try {
        const student = await fetch(`${base_api}/student/create`, {cache: 'no-store'})
        if (!student.ok) {
            throw new Error(`Response status: ${student.status}`);
        }
        return student.json();
    } catch (error) {
        throw error;
    }
}
export async function deleteStudent(id: number): Promise<Student>{
    try {
        const student = await fetch(`${base_api}/student/delete/${id}`, {
            method: 'DELETE',
            cache: 'no-cache'
        })
        if (!student.ok) {
            throw new Error(`Response status: ${student.status}`);
        }
        return student.json();
    } catch (error) {
        throw error;
    }
}
export async function search(searchText: string): Promise<Student>{
    try {
        const student = await fetch(`${base_api}/student/search?id=${searchText}`, {
            method: 'GET',
            cache: 'no-cache'
        })
        if (!student.ok) {
            throw new Error(`Response status: ${student.status}`);
        }
        return student.json();
    } catch (error) {
        throw error;
    }
}