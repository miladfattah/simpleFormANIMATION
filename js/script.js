

function animationForm(){
    const arrowBtn = document.querySelectorAll('.fa-arrow-down');
    arrowBtn.forEach(arrow => arrow.addEventListener('click' , ()=>{
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextElement = parent.nextElementSibling;

        // inputs validation
        if( input.type === 'text' && userValidation(input)){
            nextSlide(parent, nextElement);
        }else if (input.type === 'email' && emailValidation(input)){
            nextSlide(parent, nextElement);
        }else if( input.type == 'password' && userValidation(input)){
            nextSlide(parent,nextElement);
        }else {
            parent.style.animation = 'animated .5s ease';
        }

        // infinity animated
        parent.addEventListener('animationend' , ()=> parent.style.animation = "");

    }));
}

function nextSlide(parent, nextElement){
    parent.classList.remove('active');
    parent.classList.add('innactive');
    nextElement.classList.remove('innactive');
    nextElement.classList.add('active');
}

function userValidation(user){
        if(user.value.length < 6){
            colorValid('rgb(187,87,87)'); 
            return false
        } 
        colorValid('rgba(9, 170, 114, 0.904)');
        return true;
}


function emailValidation(email){
    let validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!validation.test(email.value)){
        colorValid('rgb(187,87,87)');
        return false
    }
    colorValid('rgba(9, 170, 114, 0.904)');
    return true;
}


function colorValid(color){
    document.body.style.backgroundColor = color;
}

animationForm();