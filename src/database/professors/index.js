let _professors = ["001_Bruno_Cafeo.json"]

export default new class ProfessorDatabase {
    professors = []

    constructor() {
        _professors.forEach(professor => this.professors.push(require("./" + professor)))
    }

    getProfessors() {
        return this.professors
    }

    getProfessorById(id) {
        return this.professors.find(professor => professor.id == id)
    }
}

