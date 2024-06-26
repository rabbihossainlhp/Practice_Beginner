let body = document.querySelector("body");
let buttons = document.querySelectorAll(".side_color button");

buttons.forEach(function (btn){
    btn.addEventListener("click",(follow)=>{
        // console.log(follow)
        // console.log(follow.target.id);

        // Let access main body....
        if(follow.target.id == "green"){
            body.style.backgroundColor = follow.target.id;
        }
        else if(follow.target.id == "black"){
            body.style.backgroundColor = follow.target.id;
        }
        else if(follow.target.id == "aqua"){
            body.style.backgroundColor = follow.target.id;
        }
        else if(follow.target.id == "cornflowerblue"){
            body.style.backgroundColor = follow.target.id;
        }
        else if(follow.target.id == "white"){
            body.style.backgroundColor = follow.target.id;
        }
        else if(follow.target.id == "orange"){
            body.style.backgroundColor = follow.target.id;
        }
    })
});