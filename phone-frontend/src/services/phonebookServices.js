import axios from 'axios';

const url = "http://localhost:3001/api";

export const addToPhoneBook = (name, number) => {
    const payload = {
        name,
        number,
    }
    axios.post(url, payload);
};