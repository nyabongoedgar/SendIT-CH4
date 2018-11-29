const api_object = new Api();

function login(){
    const url = "http://127.0.0.1:5000/api/v2/auth/login";
    
    var data = {
                username : document.getElementById('username').value ,
                password : document.getElementById('password').value
            };
    api_object.login(url, data)
    .then(resp_data => {
        if (resp_data.message == "No data has been sent"){
            return document.getElementById("error").innerHTML = "No data has been sent";

        }
        else if(resp_data.message == "Verification of credentials failed !"){
            return document.getElementById("error").innerHTML = "No data has been sent";
        }
        else if (resp_data.message == "password does not match !"){
            return document.getElementById("error").innerHTML = "password does not match !";
        }
        else{
            token = resp_data["token"];
            localStorage.setItem('token',token);
        }
    })
    .catch(error => {
        document.getElementById("error").innerHTML = JSON.stringify(error);
    });
}

function register_user(){
    const url = "http://127.0.0.1:5000/api/v2/auth/signup";
    password = document.getElementById('password').value;
    password2 = document.getElementById('password2').value;
    if(password != password2){
        return document.getElementById('error').innerHTML = "Passwords donot match";
    }

    var data = {
                username : document.getElementById('username').value ,
                password : document.getElementById('password').value,
                email : document.getElementById('email').value 
            };
    api_object.register(url, data)
    .then(resp_data => {
        if (resp_data.message == "Password field can not be left empty."){
            return document.getElementById("error").innerHTML = "Password field can not be left empty.";

        }
        else if(resp_data.message == "Username field can not be empty."){
            return document.getElementById("error").innerHTML = "Username field can not be empty.";
        }
        else if (resp_data.message == "Email field can not be empty."){
            return document.getElementById("error").innerHTML = "Email field can not be empty.";
        }
        else{
            return document.getElementById(error).innerHTML == "You have been successfully registered !";
        }
    })
    .catch(error => {
        document.getElementById("error").innerHTML = JSON.stringify(error);
    });
}
