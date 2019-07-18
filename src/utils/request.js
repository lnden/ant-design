import { fetch } from 'dva';

export default function request(url, options) {
    return fetch(url, options).then(response => {
        const resData = response.json();
        return resData;
    }).catch(e => {
        console.log(e);
    });
}
