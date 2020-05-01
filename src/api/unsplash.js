import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tfSyHLbhAV-pXnowMEOOIhxB-iGBVn6lQmB5cGyEs5I'
    }
});