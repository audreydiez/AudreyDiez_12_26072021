export default class UserAverageSession {
    getUserAverageSession(fetchedData) {
        const sessionsData = []
        fetchedData.data.data.sessions.map((session) => {
            sessionsData.push({
                day: this.getDay(session.day),
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

    getDay(data) {
        let value = ''
        switch (data) {
            case 1:
                value = 'L'
                break
            case 2:
                value = 'M'
                break
            case 3:
                value = 'M'
                break
            case 4:
                value = 'J'
                break
            case 5:
                value = 'V'
                break
            case 6:
                value = 'S'
                break
            case 7:
                value = 'D'
                break
            default:
                value = ''
        }
        return value
    }
}
