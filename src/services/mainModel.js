export default class MainDataModel {
  constructor(data) {
    this.data = data;
    this.userInfos = data.userInfos;
    this.firstName = this.userInfos.firstName;
    this.todayScore = data.todayScore;
    this.score = data.score;
    this.keyData = data.keyData;
  }

  getFirstName() {
    return this.firstName;
  }

  getTodayScore() {
    if (!this.todayScore) {
      return this.score;
    }
    return this.todayScore;
  }

  getScore() {
    return this.score;
  }

  getKeyData() {
    return this.keyData;
  }
}
