let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset")
let newgame = document.querySelector(".newgame")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn0=true;

const win = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8]
    
]

boxes.forEach((val)=>{                // callbackfunction is passed as an argument
    val.addEventListener("click", ()=>{
        if(turn0===true){
            val.innerText="X"
            turn0=false
        } else{
            val.innerText="O"
            turn0=true
        }
        val.disabled =true;
        checkwinner();
    })
    
})

// Function to check for a winner
// It checks all winning combinations to see if any player has won

const checkwinner = ()=>{
    for(let i of win ){
        let var0=boxes[i[0]].innerText // Get the text inside the box
        let var1=boxes[i[1]].innerText 
        let var2=boxes[i[2]].innerText 
        // var0 = boxes[0].innerText (top-left)
        //var1 = boxes[4].innerText (center)
        //var2 = boxes[8].innerText (bottom-right)

        if(var0 !="" && var1 != "" && var2 !=""){
            if(var0==var1 && var1==var2){
                // console.log(`Winner is ${var0}`)
                showwinner(var0);
                // disabledboxes();   
            } 
        } 
    }   

}

const showwinner =(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disabledboxes()
}

const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enabledboxes =()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const resetGame =()=>{
    turn0=true
    enabledboxes()
    msgcontainer.classList.add("hide")
    
}

// Event listeners for reset and new game buttons

reset.addEventListener("click", resetGame)
newgame.addEventListener("click", resetGame)