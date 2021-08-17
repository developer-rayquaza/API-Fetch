import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

class Connection{
    static getDB(){
        return axios.create(Connection.getConfiguration());
    }

    static getConfiguration(){
        return {
            baseURL: process.env.API_URI,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        }
    }
}

export = Connection;
