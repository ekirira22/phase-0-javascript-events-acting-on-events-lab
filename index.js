const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4"

document.addEventListener('keydown', e => {
    e.preventDefault()
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }else if(e.key === "ArrowRight"){
        moveDodgerRight()
    } 
})

function moveDodgerLeft(){
    
    const leftNumbers = dodger.style.left.replace('px', '')
    const leftie = parseInt(leftNumbers, 10)
    if(leftie > 0){
        dodger.style.left = `${leftie - 10}px`
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace('px', '')
    const leftie = parseInt(leftNumbers, 10)
    if(leftie < 360){
        dodger.style.left = `${leftie + 10}px`
    }

}
