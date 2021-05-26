export default new class HomeDatabase {
    home = {}

    constructor() {
       this.home = require("./home.json")
    }

    getHome() {
        return this.home
    }

}