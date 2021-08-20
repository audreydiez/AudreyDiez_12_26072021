import axios from 'axios'
import ContentData from './ContentData'
import UserDetails from './UserDetails'
import UserActivity from './UserActivity'
import UserAverageSession from './UserAverageSession'

export default class Services {
    getContentData(updateStateData) {
        const data = []
        axios
            .get('data/contentFR.json')
            .then(function (response) {
                const userDetails = new ContentData()
                data.content = userDetails.getContentData(response)
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

    getUserDetails(userID, updateStateData) {
        const data = []
        axios
            .get('http://localhost:8000/user/' + userID)
            .then(function (response) {
                const userDetails = new UserDetails()
                data.content = userDetails.getUserProfile(response)
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

    getUserActivity(userID, updateStateData) {
        const data = []

        axios
            .get('http://localhost:8000/user/' + userID + '/activity')
            .then(function (response) {
                const userActivity = new UserActivity()
                data.content = userActivity.getUserActivity(response)
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
}
