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

        api_object.get(url,token)
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