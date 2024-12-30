function validateForm(){
    const inputEmail = document.getElementById('email')
    const inputError = document.getElementById('email-error')
    if( inputEmail.value === ''){
        inputError.textContent = 'le champ ne doit pas etre vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = '20px'
    }
    else if( inputEmail.value.length <6 ){
        inputError.textContent = 'le nombre de caractère doit etre supperieur a 6'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = '20px'
    }
    else{
        inputError.textContent =''
    }
    document.getElementById('email').addEventListener('input', function(){
        document.getElementById('email-error').textContent = "";
     });

     const textMessage = document.getElementById('message')
     const textError = document.getElementById('message-error')
     if( textMessage.value === ''){
        textError.textContent = 'le message ne doit pas etre vide'
        textError.style.textAlign = 'center'
        textError.style.color = 'red'
        textError.style.fontSize = '20px'
     }
     else{
        textError.textContent =''
     }
     document.getElementById('message').addEventListener('input', function(){
     document.getElementById('message-error').textContent = "";
 });



    return false

}