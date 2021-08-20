export default class UserDetails {
    getUserProfile(fetchedData) {
        return {
            firstName: fetchedData.data.data.userInfos.firstName,
            macroNutriments: fetchedData.data.data.keyData,
            userScore: fetchedData.data.data.score || fetchedData.data.data.todayScore,
        }
    }
}
