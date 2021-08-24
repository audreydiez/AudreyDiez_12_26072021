import axios from 'axios'
import ContentData from './ContentData'
import UserDetails from './UserDetails'
import UserActivity from './UserActivity'
import UserAverageSession from './UserAverageSession'
import UserPerformance from './UserPerformance'

export default class AxiosAPIProvider {
    async getContentData() {
        const data = []

        await axios
            .get('data/contentFR.json')
            .then(function (response) {
                data.content = ContentData.getFromResponse(response)
                data.overlay = false
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
            })

        return data
    }

    async getUserDetails(userID) {
        const data = []

        await axios
            .get('http://localhost:8000/user/' + userID)
            .then(function (response) {
                data.content = UserDetails.getFromResponse(response)
                data.overlay = false
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
            })
        return data
    }

    async getUserActivity(userID) {
        const data = []

        await axios
            .get('http://localhost:8000/user/' + userID + '/activity')
            .then(function (response) {
                data.content = UserActivity.getFromResponse(response)
                data.loading = false
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
                data.loading = true
            })
        return data
    }

    getUserAverageSession(userID, updateStateData) {
        const data = []

        axios
            .get('http://localhost:8000/user/' + userID + '/average-sessions')
            .then(function (response) {
                const userAverageSession = new UserAverageSession()
                data.content = userAverageSession.getUserAverageSession(response)
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
            })
            .finally(function () {
                data.loading = false
                // Update component with the new data
                updateStateData(data)
            })
    }
    getUserPerformance(userID, updateStateData) {
        const data = []

        axios
            .get('http://localhost:8000/user/' + userID + '/performance')
            .then(function (response) {
                const userPerformance = new UserPerformance()
                data.content = userPerformance.getFromResponse(response)
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
            })
            .finally(function () {
                data.loading = false
                // Update component with the new data
                updateStateData(data)
            })
    }
}
