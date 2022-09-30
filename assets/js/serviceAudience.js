class ServiceAudience {
    constructor() { }

    async getall(url) {
        const response = await fetch(url + 'audience/' + 'audience');
        const data = await response.json();
        return data.items;
    };

    async getbyid(url, id) {
        const response = await fetch(url + 'audience/' + 'audience' + '/' + id);
        const data = await response.json();
        return data.items;
    };


    async create(url, data) {
        const response = await fetch(url + 'audience/' + 'audience', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    };

    async update(url, data) {
        const response = await fetch(url + 'audience/' + 'audience', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async delete(url, id) {
        const data = {
            id: id
        }
        const response = await fetch(url + 'audience/' + 'audience', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
}