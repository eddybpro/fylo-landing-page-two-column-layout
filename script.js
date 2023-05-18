const headerEmail = document.querySelector('.email'),
headerBtn =document.querySelector('.get-started-btn'),
headerError = document.querySelector('.header-error'),
accessBtn = document.querySelector('.access-btn'),
accessEmail = document.querySelector('.access-email'),
accessError = document.querySelector('.access-error');



const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

accessBtn.addEventListener('click',()=>{
    if(!regex.test(accessEmail.value)){
        accessError.classList.remove('none');
    }else{
        accessError.classList.add('none');
    }
});

headerBtn.addEventListener('click',()=>{
    if(!regex.test(headerEmail.value)){
        headerError.classList.remove('none');
    }else{
        headerError.classList.add('none');
    }
})