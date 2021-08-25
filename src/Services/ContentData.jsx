export default class ContentData {
    constructor(response) {}

    /**
     * Take Website content (texts) fetched and return ready-to-use object to component
     * @param {Object} fetchedData - Data from the API
     * @return  {Object} - Formatted data for the component
     */
    static getFromResponse(fetchedData) {
        return fetchedData.data
    }
}
