let btnCheck = document.querySelector(".btn-check");
let output = document.querySelector("#ans");

function clickHandler(){
    let num = document.querySelector("#inp-number");
    let numValue = Number(num.value);
    console.log("Type of Num value "+ typeof numValue);

    if(numValue === 1){
        console.log("Num value "+ numValue);
        output.innerHTML = "Non-Prime";
    }else{
        let flag = 1;
        for(let i = 2; i <= numValue/2; i++){
            console.log(i);
            if(numValue % i === 0){
                flag = 0;
                break;
            }
        }

        if(flag === 1){
            output.innerHTML = "Prime";
        }else{
            output.innerHTML = "Non-Prime";
        }
    }
}

btnCheck.addEventListener("click", clickHandler);