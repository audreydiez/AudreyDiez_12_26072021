export default class ContentData {
    constructor(response) {}

    static getFromResponse(fetchedData) {
        return fetchedData.data
    }
}
