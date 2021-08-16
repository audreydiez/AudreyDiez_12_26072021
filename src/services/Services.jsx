import axios from 'axios'

export default class Services {
    async getUserProfile(userID) {
        return await axios.get('http://localhost:8000/user/' + userID, {})
    }

    async getUserActivity(userID) {
        return await axios.get('http://localhost:8000/user/' + userID + '/activity')
    }

    async getUserAverageSession(userID) {
        return await axios.get('http://localhost:8000/user/' + userID + '/average-sessions')
    }

    async getUserPerformance(userID) {
        return await axios.get('http://localhost:8000/user/' + userID + '/performance')
    }
}
