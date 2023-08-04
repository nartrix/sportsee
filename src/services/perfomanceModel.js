export default class PerformanceModel {
  constructor(data) {
    this.data = data.data;
  }

  getData() {
    return this.data;
  }
}

export const getPerformanceDataValue = (data) => {
  let dataArray = [];

  for (let i = 0; i < data.length; i++) {
    dataArray.push({
      kind: data[i].kind,
      A: data[i].value,
    });
  }

  let maxDataValue = Math.max(...dataArray.map((item) => item.A));
  for (let j = 0; j < dataArray.length; j++) {
    dataArray[j].fullMark = maxDataValue;
  }
  return dataArray;
};
