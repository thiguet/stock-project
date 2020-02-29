const defaultHeaders = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'    
};

export default class FetchJson {
    get(url) {
        const fetchData = {
            method: 'GET',
            headers: new Headers(defaultHeaders),
            mode: 'cors',
            cache: 'default',
        };

        return fetch(url, fetchData)
            .then(function (response) {
                return response.json();
            });
    }

    post(url, bodyData) {
        const fetchData = {
            method: 'POST',
            headers: new Headers(defaultHeaders),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(bodyData)
        };

        return fetch(url, fetchData)
            .then(function (response) {
                return response.json();
            });
    }
}