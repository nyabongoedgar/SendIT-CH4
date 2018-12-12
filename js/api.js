

 class Api{   
    
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

    
}


