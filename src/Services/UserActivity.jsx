export default class UserActivity {
    constructor(response) {}

    /**
     * Take user activity data fetched and return ready-to-use object to component
     * @param {Object} fetchedData - Data from the API
     * @return  {Object} - Formatted data for the component
     */
    static getFromResponse(fetchedData) {
        const sessionsData = []
        fetchedData.data.data.sessions.map((session) => {
            sessionsData.push({
                day: session.day.slice(-1),
                kg: session.kilogram,
                kCal: session.calories,
            })
        })
        return {
            userActivity: sessionsData,
            minValueYaxisKg: Math.min(...sessionsData.map(({ kg }) => kg)) - 1,
            maxValueYaxisKg: Math.max(...sessionsData.map(({ kg }) => kg)) + 1,
            minValueYaxisKcal: Math.min(...sessionsData.map(({ kCal }) => kCal)) - 50,
            maxValueYaxisKcal: Math.max(...sessionsData.map(({ kCal }) => kCal)) + 50,
        }
    }
}
