const playerNameArray = [];

function playerNameDisplay(playerNameArray) {
    const playersNameOrderList = document.getElementById('playersNameOrderList');
    playersNameOrderList.innerHTML = '';

    for (let i = 0; i < playerNameArray.length; i++) {


        // playerNameArray.length.pop();

        const playerName = playerNameArray[i].playerName;
        const playerList = document.createElement('li');
        playerList.innerText = playerName;
        playersNameOrderList.appendChild(playerList);

    }
}

function addToUl(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerNameObject = {
        playerName: playerName
    }
    playerNameArray.push(playerNameObject)
    if (playerNameArray.length > 5) {
        alert("You can't select more than 5 players!")
        return
    }
    else {
        document.getElementById('selected-players').innerText = playerNameArray.length;
        playerNameDisplay(playerNameArray)
    }




}
