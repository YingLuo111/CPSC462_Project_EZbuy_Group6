import _axios from 'axios';

const axios = baseURL => {
  // const instance = _axios.create({
  //   baseURL:
  //     'http://localhost:5000',
  //   timeout: 5000
  // });

  const instance = _axios.create({
    baseURL:
      'http://18.223.187.69',
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      const jwToken = global.auth.getToken();
      config.headers['Authorization'] = 'Bearer ' + jwToken;
      // config.headers['Access-Control-Allow-Origin'] = '*'
      // Do something before request is sent
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return instance;
};

export { axios };

export default axios();