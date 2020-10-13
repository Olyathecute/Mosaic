let emptyCell

function newGame() {  
    let arr = []
    for (let i = 1; i <= 16; i++) arr.push(i)
    arr.sort(() => Math.random() - 0.5);
    for (let i = 1; i <= 16; i++) {
        const fromCell = document.getElementById(`cell${i}`)
        const toCell = document.getElementById(`cell${arr[i-1]}`)

        if (toCell.childNodes[0]) fromCell.appendChild(toCell.childNodes[0])
        if (fromCell.childNodes[0]) toCell.appendChild(fromCell.childNodes[0])
    }
    for (let i = 1; i <= 16; i++) {
        if (document.getElementById(`cell${i}`).childNodes.length === 0) {
            emptyCell = document.getElementById(`cell${i}`)
        }
    }
}

function move(buttonId) { 
    if (!emptyCell) return
    const moveButton = document.getElementById(buttonId)
    const fromCell = moveButton.parentElement   
    const cellNumber = +fromCell.id.slice(4)
    const emptyCellNumber = +emptyCell.id.slice(4)
    
    let canMove = 
        (cellNumber <= 12 && emptyCellNumber === cellNumber + 4) 
        || (cellNumber > 4 && emptyCellNumber === cellNumber - 4) 
        || (cellNumber % 4 !== 0 && emptyCellNumber === cellNumber + 1) 
        || (cellNumber % 4 !== 1 && emptyCellNumber === cellNumber - 1) 

    if (canMove) {
        emptyCell.appendChild(moveButton)
        emptyCell = fromCell
        checkWin()
    }
}
function checkWin() {
    accordance = true
    for (let i = 1; i < 16; i++) {
        if (document.getElementById(i).id !== document.getElementById(i).parentElement.id.slice(4)) {
            accordance = false
            break
        }
    }
    if (accordance) alert('You won!')
}





