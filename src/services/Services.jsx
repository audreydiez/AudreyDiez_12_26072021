import axios from 'axios'

export default class Services {
    async getUserProfile(id) {
        try {
            return (await axios.get('data/mockedUser.json', {})).data[1]
        } catch (error) {
            return error
        }
    }
}
