import publications from "@/database/publications"

let _students =
    [
        "001_Gabriel_Menezes.json",
        "002_Karolina_Neves.json",
        "003_Adriano_Marques.json",
        "004_Sabia_Belle.json",
        "005_Matheus_M.json",
        "006_Celso_Junior.json"
    ]

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

    getStudentsByProfessorId(professor_id) {
        return this.students.filter(student => student.professor == professor_id)
    }
}

