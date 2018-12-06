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

function cancel_order(){
   
    if(window.confirm("Are you sure you want to cancel the order ?")){
        x = document.getElementById("status_element").innerHTML = 'Cancelled';
        document.getElementById("status_element").style.color="#1aaf2d";document.getElementById("status_element").style.backgroundColor="yellow";
        window.alert('Parcel order modified');  
        return x
    }
    else{
        return false;
    }
    
}
/* admin functions */


function change_location_admin(){
    var temp = document.getElementById("curr_location").innerHTML;
    var a = prompt("Please enter current location of the parcel",temp);
    if (a.trim() !==''){
    var b = document.getElementById("curr_location").innerHTML = a.toUpperCase();
    document.getElementById("curr_location").style.backgroundColor="#1aaf2d";
    window.alert('Email notification sent to parcel owner');    
    return b;
}


}
// displaying a specific div
function display(){
    var x =  document.getElementById("nav-ul");
    x.classList.toggle("height-adj");
}