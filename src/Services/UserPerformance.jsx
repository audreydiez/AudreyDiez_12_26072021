export default class UserPerformance {
    constructor(response) {}

    /**
     * Take user performances data fetched and return ready-to-use object to component
     * @param {Object} fetchedData - Data from the API
     * @return  {Object} - Formatted data for the component
     */
    static getFromResponse(fetchedData) {
        const userAverageThemeData = []
        fetchedData.data.data.data.map((data, index) => {
            userAverageThemeData.push({
                subject:
                    fetchedData.data.data.kind[index + 1].charAt(0).toUpperCase() +
                    fetchedData.data.data.kind[index + 1].slice(1),
                value: data.value,
            })
        })

        return userAverageThemeData
    }
}
