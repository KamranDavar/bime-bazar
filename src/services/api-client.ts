import axios from 'axios';

export default axios.create({
    baseURL: 'https://front-end-task.bmbzr.ir/',
    withCredentials: true,
})