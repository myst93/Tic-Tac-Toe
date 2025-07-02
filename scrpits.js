let boxes = document.querySelectorAll(".boxes");
let turn0=true;

const win =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,5,6],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8]
    
]


boxes.forEach((val)=>{
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


const checkwinner = ()=>{
    for(let i of win ){
        let var0=boxes[i[0]].innerText
        let var1=boxes[i[1]].innerText
        let var2=boxes[i[2]].innerText

        if(var0 !="" && var1 != "" && var2 !=""){
            if(var0==var1 && var1==var2){
                console.log()
                
            }
    }   }

}