'use strict';

export function calculateAverageRCArea (config) {
    const {
        counterFE,
        buttonMinusFE,
        buttonPlusFE,
        buttonCalculateAverageAreaArm,
        resultAreasArm,
        resultWithArm,
        arrowPlayAreaArm,
        arrowPauseAreaArm,
    } = config;

    const spanCounterFE = document.querySelector(`.${counterFE}`);
    const btnMinusFE = document.querySelector(`.${buttonMinusFE}`);
    const btnPlusFe = document.querySelector(`.${buttonPlusFE}`);
    const btnCalculateAverageAreaArm = document.querySelector(`.${buttonCalculateAverageAreaArm}`);
    const spanResultAreasArm = document.querySelector(`.${resultAreasArm}`);
    const spanResultWidthArm = document.querySelector(`.${resultWithArm}`);
    const arrowPlayDiv = document.querySelector(`.${arrowPlayAreaArm}`);
    const arrowPauseDiv = document.querySelector(`.${arrowPauseAreaArm}`);

    btnPlusFe.addEventListener('click', e => {
        const cardsAddedFE = document.querySelectorAll('.card-added-fe');
        if (cardsAddedFE.length < 3) {
            spanCounterFE.innerHTML = cardsAddedFE.length + 2;
            const divAddedFE = document.createElement("div");
            divAddedFE.classList.add("card");
            divAddedFE.classList.add("text-center");
            divAddedFE.classList.add("card-added-fe");

            const headerAddedFE = document.createElement('div');
            headerAddedFE.classList.add("card-header");
            headerAddedFE.innerHTML = `КЭ #${cardsAddedFE.length + 2}`
            divAddedFE.append(headerAddedFE);

            const bodyCardAddedFE = document.createElement('div');
            bodyCardAddedFE.classList.add("card-body");
            const labelAreaInput = document.createElement('label');
            labelAreaInput.innerHTML = `A<sub>арм.</sub> = `;
            const inputArea = document.createElement('input');
            inputArea.classList.add("input-area-arm");
            bodyCardAddedFE.append(labelAreaInput);
            bodyCardAddedFE.append(inputArea);
            const spanSize = document.createElement('span');
            spanSize.innerHTML = `см<sup>2</sup>/м`
            bodyCardAddedFE.append(spanSize);
            divAddedFE.append(bodyCardAddedFE);

            const footerCardAddedFE = document.createElement('div');
            footerCardAddedFE.classList.add("card-footer");
            const labelWidthFE = document.createElement('label');
            labelWidthFE.innerHTML = `L<sub>стороны</sub> = `;
            const inputWidthFe = document.createElement('input');
            inputWidthFe.classList.add("input-width-fe");
            footerCardAddedFE.append(labelWidthFE);
            footerCardAddedFE.append(inputWidthFe);
            footerCardAddedFE.append('м');
            divAddedFE.append(footerCardAddedFE);

            const divCol = document.createElement('div');
            divCol.classList.add("col-lg-3");
            divCol.classList.add("col-md-6");
            divCol.classList.add("col-sm-12");
            divCol.classList.add("col-added");
            divCol.append(divAddedFE);

            document.querySelector('.fe-group').append(divCol);

        }
        spanResultAreasArm.style.color = 'red';
        spanResultAreasArm.innerHTML = '0';
        spanResultWidthArm.style.color = 'red';
        spanResultWidthArm.innerHTML = '0';
        arrowPlayDiv.style.display = 'none';
        arrowPauseDiv.style.display = 'inline'
    })

    btnMinusFE.addEventListener('click', e=>{

        const cardsAddedFE = document.querySelectorAll('.col-added');
        if (cardsAddedFE.length) {
            spanCounterFE.innerHTML = cardsAddedFE.length + 1 - 1;
            cardsAddedFE[cardsAddedFE.length - 1].remove();

        }
        spanResultAreasArm.style.color = 'red';
        spanResultAreasArm.innerHTML = '0';
        spanResultWidthArm.style.color = 'red';
        spanResultWidthArm.innerHTML = '0';
        arrowPlayDiv.style.display = 'none';
        arrowPauseDiv.style.display = 'inline'
    })

    btnCalculateAverageAreaArm.addEventListener("click", () => {
        const inpAreasArr = document.querySelectorAll(".input-area-arm");
        const inpWidthsArr = document.querySelectorAll(".input-width-fe");
        const sumAreasArr = [];
        const sumWidthsArr = [];
        inpAreasArr.forEach((item) => {
          sumAreasArr.push(parseFloat(item.value));
        });
        
        inpWidthsArr.forEach((item) => {
          sumWidthsArr.push(parseFloat(item.value));
        });
      
        const sumsAreaPlusWidth = combineArrays(sumAreasArr, sumWidthsArr).reduce((acc,arr) => acc + arr);
      
        const sumWidths = sumWidthsArr.reduce((acc, lg) => acc + lg);

        const checkerNaNAreasArm = sumAreasArr.reduce((acc,area) => acc + area);

        if (!Number.isNaN(checkerNaNAreasArm) && !Number.isNaN(sumWidths)) {
            spanResultAreasArm.style.color = 'blue';
            spanResultAreasArm.innerHTML = (sumsAreaPlusWidth/sumWidths).toFixed(3);
            spanResultWidthArm.style.color = 'blue';
            spanResultWidthArm.innerHTML = sumWidths.toFixed(3);
            arrowPlayDiv.style.display = 'inline';
            arrowPauseDiv.style.display = 'none';
        } else {
            spanResultAreasArm.style.color = 'red';
            spanResultAreasArm.innerHTML = '0';
            spanResultWidthArm.style.color = 'red';
            spanResultWidthArm.innerHTML = '0';
            arrowPlayDiv.style.display = 'none';
            arrowPauseDiv.style.display = 'inline';
        }
      });
}

function combineArrays(first, second) {
    for(let i = 0; i < first.length; i++){
  first[i] = first[i] * second[i]
    }
    return first;
  }