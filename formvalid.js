var form = document.getElementById("form");
form.addEventListener("submit", valider);

function valider (event){
    event.preventDefault();
    let isValid = false;
    let errors = [];
    let inputs = document.querySelectorAll(".validate");

    inputs.forEach(function(element){
        if(element.value.length < 1){
            errors.push(`Fejl: Feltet ${element.id} skal udfyldes.`);
            isValid = false;
            element.style.backgroundColor = "pink";
        }
        else if(element.classList.contains("validate-email") && validateEmail(element.value) == false){
            errors.push(`Fejl: feltet ${element.id} skal være en gyldig email`);
            isValid = false;
            element.style.backgroundColor = "pink";
        }
    });

    if(isValid == false){
        document.getElementById("error-div").innerHTML = errors.toString().replaceAll(",", "<br>");
        console.log(errors.toString());
    }
    else{
        form.submit();
    }
}

function validateEmail(email){
    let re = /(.+)@(.+){2,}\.(.+){2,}$/;
    return re.test(String(email).toLowerCase());
}