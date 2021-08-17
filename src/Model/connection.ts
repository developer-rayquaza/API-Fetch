import axios from 'axios';


class Connection{
    static getDB(){
        return axios.create(Connection.getConfiguration());
    }

    static getConfiguration(){
        return {
            baseURL: 'https://jsonplaceholder.typicode.com',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        }
    }
}

export = Connection;
