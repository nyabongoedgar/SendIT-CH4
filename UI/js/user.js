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
