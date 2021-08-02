import publications from "@/database/publications"
import students from "@/database/students"

let _professors = ["001_Bruno_Cafeo.json"]

export default new class ProfessorDatabase {
    professors = []

    constructor() {
        _professors.forEach(professor => {
            let read_professor = require("./" + professor)
            read_professor.publications = publications.getPublicationsByProfessorId(read_professor.id)
            read_professor.students = students.getStudentsByProfessorId(read_professor.id)
            this.professors.push(read_professor)
        })
    }

    getProfessors() {
        return this.professors
    }

    getProfessorById(id) {
        return this.professors.find(professor => professor.id == id)
    }
}

