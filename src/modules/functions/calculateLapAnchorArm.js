export function calculateLapAnchorArm (table, config) {
    const selectClassBeton = document.querySelector(`[name=${config.nameClassBeton}]`);
    const selectClassArm = document.querySelector(`[name=${config.nameClassArm}]`);
    const selectDiameterArm = document.querySelector(`[name=${config.nameDiameterArm}]`);
    const btnCalculateLapAnchor = document.querySelector(`.${config.btnCalculateLapAnchor}`)

    btnCalculateLapAnchor.addEventListener('click', e =>{

        const lap = table[selectClassBeton.value][selectClassArm.value][selectDiameterArm.value]['lap'];
        const anchor = table[selectClassBeton.value][selectClassArm.value][selectDiameterArm.value]['anchor'];

    })
}