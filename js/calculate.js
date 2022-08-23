function getInputFieldElementById(elementId) {
    const inputElement = document.getElementById(elementId);
    const inputString = inputElement.value;
    const input = parseFloat(inputString);
    return input;

}

function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);

    const textElementString = textElement.innerText;
    const text = parseFloat(textElementString);

    return text;
}

function setTextElementById(elementId, value) {
    const newTextElement = document.getElementById(elementId);

    newTextElement.innerText = value;

}



document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = getInputFieldElementById('per-player-field')
    if (isNaN(perPlayerField)) {
        alert('Please Input a Number.')
        return
    }

    const totalPlayerCost = perPlayerField * (playerNameArray.length);
    setTextElementById('player-expenses', totalPlayerCost)

})

document.getElementById('btn-total').addEventListener('click', function () {
    const perPlayerField = getInputFieldElementById('per-player-field')
    if (isNaN(perPlayerField)) {
        alert('Please Input a Number.')
        return
    }

    const totalPlayerCost = perPlayerField * (playerNameArray.length);
    const managerCost = getInputFieldElementById('manager-field');
    if (isNaN(managerCost)) {
        alert('Please Input a Number.')
        return
    }
    const coachCost = getInputFieldElementById('coach-field');
    if (isNaN(coachCost)) {
        alert('Please Input a Number.')
        return
    }

    const totalCost = totalPlayerCost + managerCost + coachCost;

    setTextElementById('total-expenses', totalCost);
})