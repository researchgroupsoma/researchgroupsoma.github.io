import publications from "@/database/publications"
import projects from "@/database/projects"

let _students = ["001_Gabriel_Menezes.json"]

export default new class StudentDatabase {
    students = []

    constructor() {
        _students.forEach(student => this.students.push(require("./" + student)))
    }

    getStudents() {
        return this.students
    }

    getStudentById(id) {
        return this.students.find(student => student.id == id)
    }
}

