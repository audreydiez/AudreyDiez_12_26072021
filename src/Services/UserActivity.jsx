export default class UserActivity {
    getUserActivity(fetchedData) {
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
