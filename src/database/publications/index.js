let _publications = ["001_Menezes_2019_Framework.json"]

export default new class PublicationDatabase {
    publications = []

    constructor() {
        _publications.forEach(publication => {
            this.publications.push(require("./" + publication))
        })
    }

    getPublications() {
        return this.publications
    }

    getPublicationById(id){
        return this.publications.find(publication => publication.id == id)
    }
}
