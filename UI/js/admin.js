const api_object = new Api();

const url_presentLocation = "http://127.0.0.1:5000/api/v2/parcels/${parcelId}/presentLocation";
const url_view_all ="http://127.0.0.1:5000/api/v2/admin/parcels";



function change_status(){
    var parcelId = parseInt(document.getElementById('parcelId').innerHTML);
    const url_status = "http://127.0.0.1:5000/api/v2/parcels/"+parcelId+"/status";
    var temp = document.getElementById('status_element').innerHTML;
    var a = prompt("Please enter the new status of the parcel ['Delivered, 'Pending' or 'cancelled]",temp);
    if (a.toLowerCase() == 'delivered' || a.toLowerCase() == 'pending' || a.toLowerCase() == 'cancelled'){
        document.getElementById("status_element").style.backgroundColor="#1aaf2d";
        document.getElementById('status_element').innerHTML=a.toUpperCase();
        const new_status = a;
        var data = {
            status : new_status
        };
        token = localStorage.getItem('token');
        if (token){
        api_object.update(url_status,data,token)
        .then(resp_data =>{
            return true;
        })
        .catch(error => {
            return document.getElementById('error').innerHTML = JSON.stringify=(error)
        } ); 
        } 
        else{
            window.alert('Token missing !');
        }

    }
    else{
        return window.alert('Wrong Choice, please use Delivered,Pending or cancelled');
    }
    
}


function change_current_location(){
    const curr_location = document.getElementById('curr_location').value;
    var data = {
        present_location : curr_location
    };
    token = localStorage.getItem('token');
    if (token){
    api_object.update(url_presentLocation,data,token)
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
            var content = document.getElementById('content');            
            const parcels = data;
            content.innerHTML += '<div id="order-view-table"><caption>All orders</caption> <table id="order-table"><tr><th>Parcel ID</th><th>Parcel Description</th><th>Parcel source</th><th>Parcel Destination</th><th>Current location</th><th>Receiver name</th><th>Receiver telephone</th><th>Price quote</th><th>Status</th><th>Weight(kg)</th><th>Date placed</th><th>Status</th><th>Present location</th></tr>'
            for(var i=0; i < parcels.length; i++){
               
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

                document.getElementById('order-table').innerHTML += ' <tr><td id="parcelId">'+ parcel_id+'</td><td>'+parcel_description+'</td><td>'+parcel_source+'</td><td>'+parcel_destination+'</td><td>'+current_location+'</td><td>'+receiver_name+'</td><td>'+receiver_telephone+'</td><td>'+price_quote+'</td><td id="status_element">'+status+'</td><td>'+parcel_weight+'</td><td>'+date_created+'</td><td><button class="edit-button"  onclick="change_status()"><img class="pencil" src="../images/pencil.png" title="cancel order"></button></td><td><button class="edit-button" onclick="change_location_admin()"><img class="pencil" src="../images/pencil.png" title="Edit order"></button></td></tr>';
              
               
                 
            }
            content.innerHTML += '</table></div>';
        })
        .catch(error => {
            console.log(error);
        });
        

    }}