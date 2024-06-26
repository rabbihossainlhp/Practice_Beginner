document.addEventListener("DOMContentLoaded",()=>{
    let form = document.querySelector("form");
    let resShowing = document.querySelector("#showing-result p");
    let button = document.querySelector("form button")

    button.addEventListener("click",(eventV)=>{
        eventV.preventDefault();

        let height = parseInt (document.querySelector("#height").value.trim());
        let weight = parseInt (document.querySelector("#weight").value.trim());

        if(height=='' || height <0 || isNaN(height)){
            resShowing.innerText = `Invalid height`;
        }
        else if (weight == '' || weight<0 || isNaN(weight)){
            resShowing.innerText = `Invalid weight`;
        }
        else{
            let valueM = (weight /((height*height)/ 10000)).toFixed(1);
            let final = resShowing.innerText = valueM;

            if(final<18){
                resShowing.innerText = `${valueM} Under weight`;
            }
            else if(final>25){
                resShowing.innerText = `${valueM} Over weight`;
            }
            else{
                resShowing.innerText = `${valueM} Perfect`;
            }
        }
    });
})

