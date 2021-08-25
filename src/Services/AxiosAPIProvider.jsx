import axios from 'axios'
import ContentData from './ContentData'
import UserDetails from './UserDetails'
import UserActivity from './UserActivity'
import UserAverageSession from './UserAverageSession'
import UserPerformance from './UserPerformance'

export default class AxiosAPIProvider {
    websiteContentURL
    constructor() {
        this.websiteContentURL = 'data/'
        this.apiURL = 'http://localhost:8000/'
    }

    async getContentData() {
        const data = []

        await axios
            .get(this.websiteContentURL + 'contentFR.json')
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
            .get(this.apiURL + 'user/' + userID)
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
            .get(this.apiURL + 'user/' + userID + '/activity')
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

    async getUserAverageSession(userID) {
        const data = []

        await axios
            .get(this.apiURL + 'user/' + userID + '/average-sessions')
            .then(function (response) {
                data.content = UserAverageSession.getFromResponse(response)
                data.loading = false
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
                data.loading = true
            })
        return data
    }

    async getUserPerformance(userID) {
        const data = []

        await axios
            .get(this.apiURL + 'user/' + userID + '/performance')
            .then(function (response) {
                data.content = UserPerformance.getFromResponse(response)
                data.loading = false
            })
            .catch(function (error) {
                data.errorMsg = error.message
                data.fail = true
                data.loading = true
            })
        return data
    }
}
