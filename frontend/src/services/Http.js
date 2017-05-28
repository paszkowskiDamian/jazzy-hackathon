export class Http {
    constructor(address) {
        this.address = address;
    }

    makeRequest(method, path, options = null) {
        let isUserLoggedIn = true;

        const config = {
            method,
            body: options,
            headers: {
                'Content-Type': 'application/json',
            },
        }
			console.log('hha ', config);

        return fetch(this.address + path, config)
            .then(res => {
                if (res.status !== 200) {
                    return {
                        isUserLoggedIn: false
                    }
                } else return res.json();      
            })
            .then(res => ({
                isUserLoggedIn,
                ...res
            }))
    }

    GET(path) {
        return this.makeRequest('GET', path);
    }

    POST(path, options) {
        return this.makeRequest('POST', path, options);
    }
}

export const httpService = new Http('http://localhost:3005');
