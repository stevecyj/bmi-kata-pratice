// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
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

function printBmi(height, weight) {
  let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  console.log(bmi);

  if (bmi < 18.5) {
    bmiStateText("overThin");
  } else if (18.5 <= bmi && bmi < 24) {
    bmiStateText("normal");
    console.log("正常");
  } else if (24 <= bmi && bmi < 27) {
    bmiStateText("overWeight");
    console.log("您的體重過重");
  } else if (27 <= bmi && bmi < 30) {
    bmiStateText("mildFat");
    console.log("您的體重輕度肥胖");
  } else if (30 <= bmi && bmi < 35) {
    bmiStateText("moderateFat");
    console.log("您的體重中度肥胖");
  } else if (35 <= bmi) {
    bmiStateText("severeFat");
    console.log("您的體重重度肥胖");
  } else {
    console.log("您輸入的數字錯誤");
  }
}
printBmi(178, 20);
// >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70);
// >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85);
// >> 印出 console.log 文字為「您的體重過重」
printBmi(178, 90);
// >> 印出 console.log 文字為「您的體重輕度肥胖」
printBmi(178, 110);
// >> 印出 console.log 文字為「您的體重中度肥胖」
printBmi(178, 130);
// >> 印出 console.log 文字為「您的體重重度肥胖」
printBmi("身高", "體重");
// >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
