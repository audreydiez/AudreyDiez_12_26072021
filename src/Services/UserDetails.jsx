export default class UserDetails {
    constructor(response) {}

    static getFromResponse(fetchedData) {
        return {
            firstName: fetchedData.data.data.userInfos.firstName,
            macroNutriments: fetchedData.data.data.keyData,
            userScore: fetchedData.data.data.score || fetchedData.data.data.todayScore,
        }
    }
}
