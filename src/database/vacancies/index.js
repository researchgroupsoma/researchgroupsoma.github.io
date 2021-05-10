let _vacancies = ["001_Vacancy.json", "002_Vacancy.json"]

export default new class VacanciesDatabase {
    vacancies = []

    constructor() {
        _vacancies.forEach(vacancy => {
            this.vacancies.push(require("./"+vacancy))
        })
    }

    getVacancies() {
        return this.vacancies
    }
}