document.getElementById('login-btn').addEventListener('click',function(){
    //get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    //get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    //check Email and Password
    if(userEmail == 'abc@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
    else{
        console.log('Invalid Password');
    }
});

//handle deposit button event