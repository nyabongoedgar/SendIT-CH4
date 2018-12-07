const api_object = new Api();
const url = "http://127.0.0.1:5000/api/v2/parcels";
const update_url = "http://127.0.0.1:5000/api/v2/parcels/${parcelId}/destination";

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
            // console.log(data[0]);
            var content = document.getElementById('content');            
            const parcels = data;
            content.innerHTML += '<div id="order-view-table"><caption>All orders</caption> <table id="order-table"><tr><th>Parcel ID</th><th>Parcel Description</th><th>Parcel source</th><th>Parcel Destination</th><th>Current location</th><th>Receiver name</th><th>Receiver telephone</th><th>Price quote</th><th>Status</th><th>Weight(kg)</th><th>Date placed</th><th>Change destination</th></tr>'
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

                document.getElementById('order-table').innerHTML += ' <tr><td>'+ parcel_id+'</td><td>'+parcel_description+'</td><td>'+parcel_source+'</td><td>'+parcel_destination+'</td><td>'+current_location+'</td><td>'+receiver_name+'</td><td>'+receiver_telephone+'</td><td>'+price_quote+'</td><td>'+status+'</td><td>'+parcel_weight+'</td><td>'+date_created+'</td><td><button class="edit-button" onclick="change_parcel_destination();"><img class="pencil" src="../images/pencil.png" title="Edit order"></button></td></tr>';
              
               
                 
            }
            content.innerHTML += '</table></div>';
        })
        .catch(error => {
            console.log(error);
        });
        

    }}

    function change_parcel_destination(){
        var table = document.getElementById('order-table');
        var rows = table.rows //rows collection
        for (var i = 1; i < rows.length; i++){
            rows[i].onclick = function(){
                if(this.parentNode.nodeName == 'thead'){
                    return;
                }
                var cells = this.cells; //cells collection
                var parcelId = parseInt(cells[0].innerHTML);
                
                const url_presentLocation = "http://127.0.0.1:5000/api/v2/parcels/"+parcelId+"/destination";
                var temp = cells[3].innerHTML; //current destination
                var a = prompt("Please enter new destination of the parcel",temp);
                if (a.trim() !==''){
                    cells[3].innerHTML = a.toUpperCase(); //updating destination location
                    cells[3].style.backgroundColor="#1aaf2d"; //changing bg color
    
                
                    var data = {
                        destination : a
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
    
                } else{
                    window.alert('The location should not be a space ');
                }
            }
             
        }
         
    }