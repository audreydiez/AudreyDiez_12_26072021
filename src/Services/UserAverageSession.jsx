export default class UserAverageSession {
    constructor(response) {}

    /**
     * Take user sessions data fetched and return ready-to-use object to component
     * @param {Object} fetchedData - Data from the API
     * @return  {Object} - Formatted data for the component
     */
    static getFromResponse(fetchedData) {
        const sessionsData = []
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

        fetchedData.data.data.sessions.map((session) => {
            sessionsData.push({
                day: days[session.day - 1],
                sessionLength: session.sessionLength,
            })
        })
        return {
            userAverageSession: sessionsData,
            minValueYaxis: Math.min(
                ...sessionsData.map(({ sessionLength }) => sessionLength / 1.66),
            ),
            maxValueYaxis: Math.max(
                ...sessionsData.map(({ sessionLength }) => sessionLength * 1.5),
            ),
        }
    }
}
