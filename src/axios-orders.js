import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-chandranshu.firebaseio.com/'
});

export default instance;