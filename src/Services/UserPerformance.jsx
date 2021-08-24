export default class UserPerformance {
    constructor(response) {}

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
