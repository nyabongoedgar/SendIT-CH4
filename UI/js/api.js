const url = 'https://sendit299.herokuapp.com/api/v2/auth/login';
let data = {
    username : getElementById('username').value ,
    password : getElementById('password').value
}
var request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});
fetch(request)
.then((resp) => resp.json())
.then(function(data){
    let token = data.token;
})
.catch(function(error){
    return document.getElementById('error').innerHTML = error.stringify();
});