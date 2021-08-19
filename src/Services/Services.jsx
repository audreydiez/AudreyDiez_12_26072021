import axios from 'axios'
import ContentData from './ContentData'

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
}
