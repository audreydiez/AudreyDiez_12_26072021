export default class UserDetails {
    constructor(response) {}

    /**
     * Take user details data fetched and return ready-to-use object to component
     * @param {Object} fetchedData - Data from the API
     * @return  {Object} - Formatted data for the component
     */
    static getFromResponse(fetchedData) {
        return {
            firstName: fetchedData.data.data.userInfos.firstName,
            macroNutriments: fetchedData.data.data.keyData,
            userScore: fetchedData.data.data.score || fetchedData.data.data.todayScore,
        }
    }
}
