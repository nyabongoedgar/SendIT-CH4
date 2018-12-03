const api_object = new Api();
const url = "http://127.0.0.1:5000/api/v2/parcels";

function createNode(element){
    return document.createElement(element);
}
function append(parent, el){
    return parent.append(el);
}

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


function get_parcels(){
    token = localStorage.getItem('token');
    if (token){
        const tr = document.getElementById('tabrow');
        api_object.get(url,token)
        .then(resp => resp.json())
        .then(function(data){
            let parcels = data;
            return parcels.map(function(parcel){
                let td = createNode('td');
                append(td,parcel.parcel_description);
                append(td,parcel.parcel_weight);
                append(td,parcel.parcel_source);
                append(td,parcel.parcel_destination);
                append(td,parcel.current_location);
                append(td,parcel.date_created);
                append(td,parcel.price_quote);
                append(td,parcel.receiver_name);
                append(td,parcel.receiver_telephone);
                append(td,parcel.status);
                append(tr,td);

            })
      
        .catch(error => {
            // document.getElementById("error").innerHTML = JSON.stringify(error);
            console.log(error); 

        });
    }

