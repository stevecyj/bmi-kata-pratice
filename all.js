// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
let bmiHistoryData = [];

const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色",
  },
  normal: {
    state: "正常",
    color: "紅色",
  },
  overWeight: {
    state: "過重",
    color: "澄色",
  },
  mildFat: {
    state: "輕度肥胖",
    color: "黃色",
  },
  moderateFat: {
    state: "中度肥胖",
    color: "黑色",
  },
  severeFat: {
    state: "重度肥胖",
    color: "綠色",
  },
};

function bmiStateText(state) {
  // console.log(state);
  console.log(
    `您的體重體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`
  );
}

function addData(bmi, state) {
  // console.log(bmi, state);
  let obj = {};
  obj.bmi = bmi;
  obj.state = state;
  bmiHistoryData.push(obj);
}

function handleBmi(bmi, state) {
  let obj = {};
  obj.bmi = bmi;
  obj.state = state;
  bmiHistoryData.push(obj);

  console.log(
    `您的體重體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`
  );
}

function printBmi(height, weight) {
  let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  // console.log(bmi);

  if (bmi < 18.5) {
    handleBmi(bmi, "overThin");
  } else if (18.5 <= bmi && bmi < 24) {
    handleBmi(bmi, "normal");
  } else if (24 <= bmi && bmi < 27) {
    handleBmi(bmi, "overWeight");
  } else if (27 <= bmi && bmi < 30) {
    handleBmi(bmi, "mildFat");
  } else if (30 <= bmi && bmi < 35) {
    handleBmi(bmi, "moderateFat");
  } else if (35 <= bmi) {
    handleBmi(bmi, "severeFat");
  } else {
    console.log("您輸入的數字錯誤");
  }
}
printBmi(178, 20);
// >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70);
// >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85);

function showHistoryData() {
  console.log(
    `您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${
      bmiHistoryData[bmiHistoryData.length - 1].bmi
    }，體重${
      bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].state].state
    }！健康指數為${
      bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].state].color
    }！`
  );
}

showHistoryData();
