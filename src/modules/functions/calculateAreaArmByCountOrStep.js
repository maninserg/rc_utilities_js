"use strict";

export function calculateAreaArmByCountOrStep(configObj, tableValues) {
  const {
    typeCalc,
    inputClass,
    divResultClass,
    spanResultClass,
    arrowPlay,
    arrowPause,
    regex,
    spliter,
  } = configObj;

  const inputSource = document.querySelector(inputClass);
  const spanResult = document.querySelector(spanResultClass);
  const divResult = document.querySelector(divResultClass);
  const arrowPlayDiv = document.querySelector(arrowPlay);
  const arrowPauseDiv = document.querySelector(arrowPause);

  inputSource.addEventListener('input', (e) =>{
    const strInput = e.target.value;
    if (regex.test(strInput)) {
      const strInputAll = strInput.match(regex)["input"];
      const strInputAsArr = strInputAll.split("+");
      let sumArm = 0;

      strInputAsArr.forEach(item => {
          const itemArr = item.split(spliter);
          let itemSum;
          if(!itemArr.includes('')) {
              if(typeCalc === 'areaByCount') {
                itemSum = tableValues[itemArr[1]][itemArr[0]];
              }else if(typeCalc === 'areaByStep') {
                itemSum = tableValues[itemArr[0]][itemArr[1]];
              }else {
                itemSum = 0;
              } 
              sumArm += itemSum;
          }
      })
      sumArm = sumArm.toFixed(3);
      divResult.style.color = 'blue';
      spanResult.innerHTML = sumArm;
      arrowPlayDiv.style.display = 'inline';
      arrowPauseDiv.style.display = 'none';
    }
    if(strInput.length == 0) {
      arrowPlayDiv.style.display = 'none';
      arrowPauseDiv.style.display = 'inline';
      divResult.style.color = 'red';
      spanResult.innerHTML = '0';
    }
  })
}
