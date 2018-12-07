const api_object = new Api();

function login(){
    const url = "https://sendit299.herokuapp.com/api/v2/auth/login";
    
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
        else if(resp_data.admin == 'ok'){
            token = resp_data["token"];
            localStorage.setItem('token',token);
            window.location.assign("https://sendit300.herokuapp.com/admin/all-orders.html")
        }
        else{
            token = resp_data["token"];
            localStorage.setItem('token',token);
            window.location.assign("https://sendit300.herokuapp.com/users/create-parcel-delivery-order.html")
        }
    })
    .catch(error => {
        window.alert(JSON.stringify(error));
    });
}

function register_user(){
    const url = "https://sendit299.herokuapp.com/api/v2/auth/signup";
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
        window.alert(JSON.stringify(error));
    });
}

function logout(){
    return localStorage.removeItem('token');
}
