function change_status(){
    const new_status = document.getElementById('status').value;
    var data = {
        status : new_status
    };
    token = localStorage.getItem('token');
    if (token){
    api_object.update(update_url,data,token)
    .then(resp_data =>{
        window.alert(resp_data);
    })
    .catch(error => {
        return document.getElementById('error').innerHTML = JSON.stringify=(error)
    } ); 
    } 
    else{
        window.alert('Token missing !');
    }
}


function change_current_location(){
    const curr_location = document.getElementById('curr_location').value;
    var data = {
        present_location : curr_location
    };
    token = localStorage.getItem('token');
    if (token){
    api_object.update(update_url,data,token)
    .then(resp_data =>{
        window.alert(resp_data);
    })
    .catch(error => {
        return document.getElementById('error').innerHTML = JSON.stringify=(error)
    } ); 
    } 
    else{
        window.alert('Token missing !');
    }
}