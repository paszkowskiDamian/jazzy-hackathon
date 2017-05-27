export class Http {
    constructor(address) {
        this.address = address;
    }

    makeRequest(method, path, options = null, extraHeaders) {
        let isUserLoggedIn = true;

        const config = {
            method,
            body: options,
            headers: {
                'Content-Type': 'application/json',
                ...extraHeaders,
            },
        }

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

    GET(path,extraHeaders) {
        return this.makeRequest('GET', path, null, extraHeaders);
    }

    POST(path, options,extraHeaders) {
        return this.makeRequest('POST', path, options,extraHeaders);
    }
}

export const httpService = new Http('http://localhost:3005');
