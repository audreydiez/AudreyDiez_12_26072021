import axios from 'axios'

import { sprintf } from 'sprintf-js'

import ContentData from 'Services/ContentData'
import UserDetails from './UserDetails'
import UserActivity from './UserActivity'
import UserAverageSession from './UserAverageSession'
import UserPerformance from './UserPerformance'

export default class AxiosAPIProvider {
    constructor() {
        this.websiteContentURL = 'data'
        this.apiURL = 'http://localhost:8000'
    }

    /**
     * Fetch Website content (texts) from API / JSON local file
     * @param {string} apiURL - Base URL from API
     * @param {string} userID - user ID
     * @param {string} endPoint
     * @return  {string}
     */
    getApiURL(apiURL, userID, endPoint) {
        return sprintf('%s/user/%d/%s', this.apiURL, userID, endPoint)
    }

    /**
     * Fetch Website content (texts) from API / JSON local file
     * @return  {Array.Object}
     */
    async getContentData() {
        const data = {}

        await axios.get(this.websiteContentURL + '/contentFR.json').then(function (response) {
            data.content = ContentData.getFromResponse(response)
        })

        return data
    }

    /**
     * Fetch user details from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
    async getUserDetails(userID) {
        const data = {}

        await axios.get(this.getApiURL(this.apiURL, userID, '')).then(function (response) {
            data.content = UserDetails.getFromResponse(response)
        })

        return data
    }

    /**
     * Fetch user activity from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
    async getUserActivity(userID) {
        const data = {}
        await axios.get(this.getApiURL(this.apiURL, userID, 'activity')).then(function (response) {
            data.content = UserActivity.getFromResponse(response)
        })
        return data
    }

    /**
     * Fetch user sessions from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
    async getUserAverageSession(userID) {
        const data = {}

        await axios
            .get(this.getApiURL(this.apiURL, userID, 'average-sessions'))
            .then(function (response) {
                data.content = UserAverageSession.getFromResponse(response)
            })

        return data
    }

    /**
     * Fetch user performance from API
     * @param {string} userID - ID of the user logged.
     * @return  {Array.Object}
     */
    async getUserPerformance(userID) {
        const data = {}

        await axios
            .get(this.getApiURL(this.apiURL, userID, 'performance'))
            .then(function (response) {
                data.content = UserPerformance.getFromResponse(response)
            })

        return data
    }
}
