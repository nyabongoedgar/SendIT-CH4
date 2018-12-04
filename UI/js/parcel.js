const api_object = new Api();
const url = "http://127.0.0.1:5000/api/v2/parcels";

function create_parcel(){  
    const parcel_description = document.getElementById('parcel_description').value;
    const parcel_weight = document.getElementById('parcel_weight').value;
    const parcel_source= document.getElementById('parcel_source').value;
    const parcel_destination = document.getElementById('parcel_destination').value;
    const receiver_name = document.getElementById('receiver_name').value;
    const receiver_telephone = document.getElementById('receiver_telephone').value;
    const status = 'pending';
    var data = {
        parcel_description : parcel_description,
        parcel_weight : parcel_weight,
        parcel_source : parcel_source,
        parcel_destination : parcel_destination,
        receiver_name : receiver_name,
        receiver_telephone : receiver_telephone,
        current_location : parcel_source,
        status : status
            };
    token = localStorage.getItem('token');
    if (token){
        api_object.post(url,data,token)
        .then(resp_data =>{
            // return document.getElementById("message").innerHTML = resp_data.message;
            return window.location.assign('file:///C:/Users/Timothy/Desktop/bootcamp%2014/challenge%204/SendIT-CH4/UI/users/all-orders.html');
            })
        .catch(error => {
             document.getElementById("error").innerHTML = JSON.stringify(error); 
            });
    }
    else{
        window.alert('Token missing !');
    }

        }


function get_all_parcels(){
    token = localStorage.getItem('token');
    if (token){    

        api_object.get(url,token)
        .then(data => {
            console.log(data[0]);
            var content = document.getElementById('content');            
            const parcels = data;
            content.innerHTML += '<div id="order-view-table"><caption>All orders</caption> <table id="order-table"><tr><th>Parcel ID</th><th>Parcel Description</th><th>Parcel source</th><th>Parcel Destination</th><th>Current location</th><th>Receiver name</th><th>Receiver telephone</th><th>Price quote</th><th>Status</th><th>Weight(kg)</th><th>Date placed</th></tr>'
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

                document.getElementById('order-table').innerHTML += ' <tr><td>'+ parcel_id+'</td><td>'+parcel_description+'</td><td>'+parcel_source+'</td><td>'+parcel_destination+'</td><td>'+current_location+'</td><td>'+receiver_name+'</td><td>'+receiver_telephone+'</td><td>'+price_quote+'</td><td>'+status+'</td><td>'+parcel_weight+'</td><td>'+date_created+'</td></tr>';
              
               
                 
            }
            content.innerHTML += '</table></div>';
        })
        .catch(error => {
            console.log(error);
        });
        

    }}

function change_parcel_destination(){
    const new_area = document.getElementById('new_area').value;
    var data = {
        destination : new_area
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