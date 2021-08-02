import publications from "@/database/publications"

let _students = ["001_Gabriel_Menezes.json"]

export default new class StudentDatabase {
    students = []

    constructor() {
        _students.forEach(student => {
            let read_student = require("./" + student)
            read_student.publications = publications.getPublicationsByStudentId(read_student.id)
            this.students.push(read_student)
        })
    }

    getStudents() {
        return this.students
    }

    getStudentById(id) {
        return this.students.find(student => student.id == id)
    }
}

