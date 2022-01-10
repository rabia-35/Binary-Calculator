const btns=document.getElementsByTagName("button")

function calculator(e){
    let btn=e.target
    const btnVal=document.getElementById(btn.id).innerHTML
    const res=document.querySelector("#res")
   
    switch (btnVal) {
        case "0" :
        case "1":
        case "+":
        case "-":
        case "*":
        case "/":
            res.innerHTML+= btnVal;
        break;

        case "C":
            res.innerHTML="";
        break;
        case "=":
            let result=res.innerHTML
            let nums=/\d+/g
            result=result.replace(nums,function(nums){
                return parseInt(nums,2)
            })
            res.innerHTML=parseInt(eval(result).toString(2))
}
}

for(let button of btns){
    button.onclick=calculator;
}
