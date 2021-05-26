import professors from "./professors"
import students from "./students"
import publications from "./publications"
import softwares from "./softwares"
import researchlines from "./reserchlines"
import classes from "./classes"
import projects from "./projects"
import news from "./news"
import vacancies from "./vacancies"
import home from "./home"

export default {

    getProfessors() {
        return professors.getProfessors()
    },
    getProfessorById(id){
        return professors.getProfessorById(id)
    },

    getStudents() {
        return students.getStudents()
    },

    getStudentById(id) {
        return students.getStudentById(id)
    },

    getPublications() {
        return publications.getPublications()
    },

    getPublicationById(id){
        return publications.getPublicationById(id)
    },

    getSoftwares() {
        return softwares.getSoftwares()
    },

    getDatasets() {
        return softwares.getDatasets()
    },

    getResearchLines(){
        return researchlines.getResearchLines()
    },

    getClasses() {
        return classes.getClasses()
    },

    getProjects(){
        return projects.getProjects()
    },

    getNews() {
        return news.getNews()
    },

    getVacancies() {
        return vacancies.getVacancies()
    },

    getHome(){
        return home.getHome()
    }
}