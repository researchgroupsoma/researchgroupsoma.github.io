let _projects = ["001_Project_Name.json"]


export default new class ProjectsDatabase {
    projects = []

    constructor() {
        _projects.forEach(project => this.projects.push(require("./" + project)))
    }

    getProjects() {
        return this.projects
    }

}