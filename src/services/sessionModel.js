export default class SessionsModel {
  constructor(data) {
    this.sessions = data.sessions;
  }

  getSessions() {
    return this.sessions;
  }
}

export const getWeekDays = (sessions) => {
  const formatedSessions = [];
  const daysValue = sessions.map((session) => session.day);

  const weekDays = daysValue.map((element) => {
    if (element === 1) {
      return "L";
    } else if (element === 2) {
      return "M";
    } else if (element === 3) {
      return "M";
    } else if (element === 4) {
      return "J";
    } else if (element === 5) {
      return "V";
    } else if (element === 6) {
      return "S";
    } else if (element === 7) {
      return "D";
    }
    return element;
  });

  sessions.forEach((session, index) => {
    formatedSessions.push({
      ...session,
      day: weekDays[index],
    });
  });

  // Je rajoute un objet au début et à la fin de mon tableau formatedSessions pour obtenir une ligne entière comme sur la maquette
  formatedSessions.unshift({ day: "", sessionLength: 30 });
  formatedSessions.push({ day: "", sessionLength: 30 });
  return formatedSessions;
};
