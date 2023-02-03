document.addEventListener('DOMContentLoaded', function(){

    const submitBtn = document.getElementById('submit-contact-form-btn');

    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        if(validate()){
            sendForm();
        }
    })


});

function validate(){
    const errorLog = [];
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputs = document.getElementById('contact-form').elements;

    // Name - Error Code: 
    if(!inputs['name'].value){
        errorLog.push({'type':'empty_field', 'field_name': 'name', 'element_id': inputs['name'].id});
    }

    // Email
    if(!inputs['email'].value){
        errorLog.push({'type':'empty_field', 'field_name': 'email', 'element_id': inputs['email'].id});
    }

    else if(!inputs['email'].value.match(emailRegEx)){
        errorLog.push({'type':'wrong_email', 'field_name': 'email', 'element_id': inputs['email'].id});
    }

    // Message 
    if(!inputs['comment'].value){
        errorLog.push({'type':'empty_field', 'field_name': 'message', 'element_id': inputs['comment'].id});
    }

    // If no errors, return true
    if(errorLog.length >= 1){
        errorHandler(errorLog);
    } else {
        return true;
    }
    
}

/** Handling errors */
function errorHandler(errorLog){

    for(error in errorLog){
        
        switch(errorLog[error].type){
            case 'empty_field':
                let notice1 = new Notice('The ' + errorLog[error].field_name + ' field cannot be empty', 'error');
                notice1.show();
                break;
            case 'wrong_email':
                let notice2 = new Notice('The ' + errorLog[error].field_name + ' provided is not correct', 'error');
                notice2.show();
                break;
        }
    }
}


// Send form
function sendForm(){
    const contactForm = document.getElementById('contact-form');
    contactForm.submit();
    contactForm.reset();
}