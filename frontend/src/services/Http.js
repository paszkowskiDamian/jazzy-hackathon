export class Http {
    constructor(address) {
        this.address = address;
    }

    makeRequest(method, path, options = null) {
        const config = {
            method,
            body: options,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        return fetch(this.address + path, config)
            .then(res => {
                if (res.status !== 200) {
                    return {
                        isUserLoggedIn: false
                    }
                } else {
                    return res.json()
                }          
            });
    }

    GET(path) {
        return this.makeRequest('GET', path);
    }

    POST(path, options) {
        return this.makeRequest('POST', path, options);
    }
}

export const httpService = new Http('http://localhost:3005');
