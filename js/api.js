class Api {

    async login(url,data){
        const response = await fetch(url,{
            method: 'POST',
            headers : {'Content-type':'application/json'},
            body: JSON.stringify(data)
        });
        const response_data = await response.json();
        console.log(response_data);
        return response_data;
    }
    
    async get(url,token) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' +token
            }
        });
        const response_data = await response.json();
        return response_data
    }

    async post(url,data,token){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' +token
            },
            body : JSON.stringify(data) 
        });
        const response_data = await response.json();
        return response_data
    }

    async update(url,data, token){
        const response = await fetch (url, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' +token
            },
            body: JSON.stringify(data)
        });
        const response_data = await response.json();
        return response_data
    }

    async register(url,data){
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            },
            body : JSON.stringify(data)
        });
        const response_data = await response.json();
        return response_data
    }





}


