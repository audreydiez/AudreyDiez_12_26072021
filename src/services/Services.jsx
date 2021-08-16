import axios from 'axios'

export default class Services {
    async getUserProfile(id) {
        return (await axios.get('data/mockedUser.json', {})).data[1]
    }
}
