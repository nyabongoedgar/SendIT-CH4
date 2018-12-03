const api_object = new Api();

function create_parcel{
    const url = "http://127.0.0.1:5000/api/v2/parcels";
     
    const parcel_description = document.getElementById('parcel_description').value;
    const parcel_weight = document.getElementById('parcel_weigth').value;
    const parcel_source= document.getElementById('parcel_source').value;
    const parcel_destination = document.getElementById('parcel_destination').value;
    const receiver_name = document.getElementById('receiver_name').value;
    const receiver_telephone = document.getElementById('receiver_telephone').value;
    const current_location = document.getElementById('current_location').value ;
    const status = 'pending';
    var data = {
        parcel_description : parcel_description,
        parcel_weight : parcel_weight,
        parcel_source : parcel_source,
        parcel_destination : parcel_destination,
        receiver_name : receiver_name,
        receiver_telephone : receiver_telephone,
        current_location : current_location,
        status : status
            };

        }