let _news = [
    "001_New_Computer.json"
]

export default new class NewsDatabase {

    news = []

    constructor() {
        _news.forEach(_new => this.news.push(require("./" + _news)))
    }

    getNews() {
        return this.news
    }

    getNewsById(ids){
        return this.news.filter(_new => ids.includes(_new.id))
    }
}