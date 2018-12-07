/* User functions */
function login(){
    a = document.getElementById('mycheck').checked;
    if (a == true){
        return document.getElementById("login_form").setAttribute("action","admin/all-orders.html");
    }
    else{
        return document.getElementById("login_form").setAttribute("action","users/all-orders.html");
    }
}


// displaying a specific div
function display(){
    var x =  document.getElementById("nav-ul");
    x.classList.toggle("height-adj");
}