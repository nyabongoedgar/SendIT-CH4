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
    
    async get(url) {
        const response = await fetch(url);
        const response_data = await response.json();
        return response_data
    }

    async post(url,data,token){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                'Authorization': 'Bearer ' + '${token}'
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
                'Content-type':'application/json',
                'Authorization': 'Bearer ' + '${token}'
            },
            body: JSON.stringify(data)
        });
        const response_data = await response.json();
        return response_data
    }

    async register(url,data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body : JSON.stringify(data)
        });
        const response_data = await response.json();
        return response_data
    }





}


