import axios from 'axios'
import ContentData from 'Services/ContentData'
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

    /**
     * Fetch Website content (texts) from API / JSON local file
     * @return  {Array.Object}
     */
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

    /**
     * Fetch user details from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
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

    /**
     * Fetch user activity from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
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

    /**
     * Fetch user sessions from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
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

    /**
     * Fetch user performance from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
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
