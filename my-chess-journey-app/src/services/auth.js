const API_URL = '';

export async function authenticate(user) {
    const init = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    };

    const response = await fetch(`${API_URL}/authenticate`, init);

    if(response.ok){
        const data = await response.json();
        const token = data.jwt_token;
        localStorage.setItem('jwt', token);

        return Promise.resolve(token);
    } else{
        return Promise.reject();
    }
}

export async function refresh_token() {
    const init = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    };

    const response = await fetch(`${API_URL}/refresh_token`, init);

    if (response.ok){

        const data = await response.json();
        const token = data.jwt_token;
        localStorage.setItem('jwt', token);

        return Promise.resolve(token);
    } else{
        return Promise.reject();
    }
}


