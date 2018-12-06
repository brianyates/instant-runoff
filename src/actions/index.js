import axios from 'axios';

export const createPoll = (values) => {
    return axios.post('/api/create-poll', values);
}