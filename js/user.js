
function login(){
    let url = "http://sendit299.herokuapp.com/api/v2/auth/login";
    
    var user_data = {
                username : document.getElementById('username').value ,
                password : document.getElementById('password').value
            };
    fetch(url,{
        method: 'POST',
        headers : {'Content-type':'application/json'},
        body: JSON.stringify(user_data)
    })
    .then((response) => response.json())
    .then((data) => {
        
        if(data.message == "Wrong username"){
            console.log("Wrong username");
            return document.getElementById("error").innerHTML = "Wrong credentials";
            
        }
        else if (data.message == "No data has been sent"){
            return document.getElementById("error").innerHTML = "No data has been sent";
        } 
        else if (data.message == "password does not match !"){
            return document.getElementById("error").innerHTML = "password does not match !";
        }
        else if(data.admin == 'ok'){
            token = data["token"];
            localStorage.setItem('token',token);
            window.location.assign("http://sendit300.herokuapp.com/admin/all-orders.html")
        }
        else{
            token = data["token"];
            localStorage.setItem('token',token);
            window.location.assign("http://sendit300.herokuapp.com/users/create-parcel-delivery-order.html")
        }
    })      
    .catch(error => console.log(error));
}




function register_user(){
    let url = "http://sendit299.herokuapp.com/api/v2/auth/signup";
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

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json; charset=utf-8",
        },
        body : JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.message == "Password field can not be left empty."){
            return document.getElementById("error").innerHTML = "Password field can not be left empty.";

        }
        else if(data.message == "Username field can not be empty."){
            return document.getElementById("error").innerHTML = "Username field can not be empty.";
        }
        else if (data.message == "Email field can not be empty."){
            return document.getElementById("error").innerHTML = "Email field can not be empty.";
        }
        else{
            window.location.assign('home.html');
        }

    })

    .catch(error => console.log(JSON.stringify(error)));

    }

function logout(){
    return localStorage.removeItem('token');
}
