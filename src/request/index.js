import JsonP from 'jsonp';
import axios from 'axios';
// https://www.easy-mock.com/mock/5b6557993f60797acbabc1b0/api/tablelist

const key = '2eb6a6cfe62c0f435f9c8870624ad48d';

export default class Axios{
  static jsonpRequest() {
    return new Promise((resolve, reject) => {
      const url = `http://restapi.amap.com/v3/weather/weatherInfo?city=深圳&key=${key}`;
      JsonP(url, {
        // param: 'callback'
       }, (err, response) => {
         if (response.status === '1') {
           resolve(response.lives);
         } else {
           reject(response.info);
         }
      })
    });
  };

  static axiosRequset(url, data) {
    const baseUrl = 'https://www.easy-mock.com/mock/5b6557993f60797acbabc1b0/api';
    return new Promise((resolve) => {
      axios({
        method: 'get',
        url: baseUrl + url,
        data
      }).then((res) => {
        if (res.data.code === 0) {
          resolve(res.data)
        }
      });
    })
  }
}