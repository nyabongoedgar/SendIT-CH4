const api_object = new Api();
const url_status = "http://127.0.0.1:5000/api/v2/parcels/<int:parcelId>/status";
const url_presentLocation = "http://127.0.0.1:5000/api/v2/parcels/<int:parcelId>/presentLocation";
const url_view_all ="http://127.0.0.1:5000/api/v2/admin/parcels";

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


function get_all_parcels(){
    token = localStorage.getItem('token');
    if (token){    

        api_object.get(url_view_all,token)
        .then(data => {
            console.log(data[0]);
            
            const parcels = data;
            for(var i=0; i < parcels.length; i++){
               
                var tr = document.getElementById('tabrow');
            
                var td = createNode('td');
                var parcel_id = data[i]['parcel_id'];
                var parcel_description = data[i]['parcel_description'];
                var parcel_source = data[i]['parcel_source'];
                var parcel_destination = data[i]['parcel_destination'];
                var current_location = data[i]['current_location'];
                var receiver_name = data[i]['receiver_name'];
                var receiver_telephone = data[i]['receiver_telephone'];
                var price_quote = data[i]['price_quote'];
                var status = data[i]['status'];
                var parcel_weight = data[i]['parcel_weight'];
                var date_created = data[i]['date_created'];

                append(td,parcel_id);
                append(td,parcel_description);
                append(td, parcel_description);
                append(td,parcel_description);
                append(td,parcel_source);
                append(td,parcel_destination);
                append(td,current_location);
                append(td,receiver_name);
                append(td,receiver_telephone);
                append(td,price_quote);
                append(td,status)
                append(td,parcel_weight);
                append(td,date_created);
                  
                append(tr,td);
                 
            }
        })
        .catch(error => {
            console.log(error);
        });
        

    }}