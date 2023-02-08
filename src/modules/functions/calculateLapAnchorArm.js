"use strict";

export function calculateLapAnchorArm (table, config) {
    const selectClassBeton = document.querySelector(`[name=${config.nameClassBeton}]`);
    const selectClassArm = document.querySelector(`[name=${config.nameClassArm}]`);
    const selectDiameterArm = document.querySelector(`[name=${config.nameDiameterArm}]`);
    const btnCalculateLapAnchor = document.querySelector(`.${config.btnCalculateLapAnchor}`);

    const arrowPlayDiv = document.querySelector(`.${config.arrowPlay}`);
    const arrowPauseDiv = document.querySelector(`.${config.arrowPause}`);

    const spanResultAnchor = document.querySelector(`.${config.spanResultAnchor}`);
    const spanResultLap = document.querySelector(`.${config.spanResultLap}`);

    btnCalculateLapAnchor.addEventListener('click', e =>{

        try {
            const lap = table[selectClassBeton.value][selectClassArm.value][selectDiameterArm.value]['lap'];
            console.log(lap)
            const anchor = table[selectClassBeton.value][selectClassArm.value][selectDiameterArm.value]['anchor'];

            spanResultAnchor.style.color = 'blue';
            spanResultAnchor.innerHTML = anchor;
            spanResultLap.style.color = 'blue';
            spanResultLap.innerHTML = lap;

            arrowPlayDiv.style.display = 'inline';
            arrowPauseDiv.style.display = 'none';

        } catch (err) {
            arrowPlayDiv.style.display = 'none';
            arrowPauseDiv.style.display = 'inline';
            spanResultAnchor.style.color = 'red';
            spanResultAnchor.innerHTML = '0';
            spanResultLap.style.color = 'red';
            spanResultLap.innerHTML = '0';
            console.log(err);
        }


/*

        if (valueClassBeton !== 'Выберите класс бетона' || valueClassArm !== 'Выберите класса арматуры' || valueDiameterArm !== 'Выберите диаметр арматуры') {
            const lap = table[selectClassBeton.value][selectClassArm.value][selectDiameterArm.value]['lap'];
            const anchor = table[selectClassBeton.value][selectClassArm.value][selectDiameterArm.value]['anchor'];
    
            spanResultAnchor.innerHTML = anchor;
            spanResultLap.innerHTML = lap;
        }
*/

    })
}