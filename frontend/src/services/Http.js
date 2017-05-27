export class Http {
    constructor(address) {
        this.address = address;
    }

    makeRequest(method, path, options = null) {
        return fetch(this.address + path, {
            method,
            body: options,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json());
    }

    GET(path) {
        return this.makeRequest('GET', path);
    }

    POST(path, options) {
        return this.makeRequest('POST', path, options);
    }
}

export const httpService = new Http('localhost:3005');
