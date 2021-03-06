const api_object = new Api();

function change_current_location(){
    var table = document.getElementById('order-table');
    var rows = table.rows //rows collection
    for (var i = 1; i < rows.length; i++){
        rows[i].onclick = function(){
            if(this.parentNode.nodeName == 'thead'){
                return;
            }
            var cells = this.cells; //cells collection
            var parcelId = parseInt(cells[0].innerHTML);
            
            const url_presentLocation = "https://sendit299.herokuapp.com/api/v2/parcels/"+parcelId+"/presentLocation";
            var temp = cells[4].innerHTML; //current location
            var a = prompt("Please enter current location of the parcel",temp);
            if (a.trim() !==''){
                cells[4].innerHTML = a.toUpperCase(); //updating current location
                cells[4].style.backgroundColor="#1aaf2d"; //changing bg color

            
                var data = {
                    present_location : a
                };
                token = localStorage.getItem('token');
                if (token){
                api_object.update(url_presentLocation,data,token)
                .then(resp_data =>{
                    window.alert(resp_data);
                })
                .catch(error => {
                    window.alert(JSON.stringify(error));
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





function change_status(){
    var table = document.getElementById('order-table');
    var rows = table.rows //rows collection
    for (var i = 1; i < rows.length; i++){
        rows[i].onclick = function(){
            if(this.parentNode.nodeName == 'thead'){
                return;
            }
            var cells = this.cells; //cells collection
            var parcelId = parseInt(cells[0].innerHTML);

    
    const url_status = "https://sendit299.herokuapp.com/api/v2/parcels/"+parcelId+"/status";
    var temp = cells[8].innerHTML; //status cell
    var a = prompt("Please enter the new status of the parcel ['Delivered, 'Pending' or 'cancelled]",temp);
    if (a.toLowerCase() == 'delivered' || a.toLowerCase() == 'pending' || a.toLowerCase() == 'cancelled'){
        cells[8].style.backgroundColor="#1aaf2d"; //changing status bg color
        cells[8].innerHTML=a.toUpperCase(); //changing case to upper case
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
            window.alert(JSON.stringify(error));
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
    
}
}


 


function get_all_parcels(){
    const url_view_all ="https://sendit299.herokuapp.com/api/v2/admin/parcels";
    token = localStorage.getItem('token');
    if (token){    

        api_object.get(url_view_all,token)
        .then(data => {
    
            var content = document.getElementById('content');            
            const parcels = data;
            content.innerHTML += '<div id="order-view-table"><caption>All orders</caption> <table id="order-table"><thead><tr><th>Parcel ID</th><th>Parcel Description</th><th>Parcel source</th><th>Parcel Destination</th><th>Current location</th><th>Receiver name</th><th>Receiver telephone</th><th>Price quote</th><th>Status</th><th>Weight(kg)</th><th>Date placed</th><th>Status</th><th>Present location</th></tr></thead><tbody>'
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

                document.getElementById('order-table').innerHTML += ' <tr><td id="parcelId">'+ parcel_id+'</td><td>'+parcel_description+'</td><td>'+parcel_source+'</td><td>'+parcel_destination+'</td><td id="curr_location">'+current_location+'</td><td>'+receiver_name+'</td><td>'+receiver_telephone+'</td><td>'+price_quote+'</td><td id="status_element">'+status+'</td><td>'+parcel_weight+'</td><td>'+date_created+'</td><td><button class="edit-button"  onclick="change_status()"><img class="pencil" src="../images/pencil.png" title="cancel order"></button></td><td><button class="edit-button" onclick="change_current_location();"><img class="pencil" src="../images/pencil.png" title="Edit order"></button></td></tr>';
              
               
                 
            }
            content.innerHTML += '</tbody></table></div>';
        })
        .catch(error => {
            window.alert(JSON.stringify(error));
        });
        

    }}