import Axios from 'axios';
import Server from '../constants/Server';
import { getContent } from './ServiceUtils';

export default class OgraApiService {
  constructor(props) {
    this.client = Axios.create({
      baseURL: Server,
      headers: {
        'X-CMC_PRO_API_KEY': 'fefa9621-7dc5-4b07-bdda-2e3d89b0e713',
      },
    });
  }

  makeRequest(method, url, params = {}) {
    return this.client[method](url, params).then(getContent);
  }

  get(url, params) {
    return this.makeRequest('get', url, params);
  }

  post(url, params) {
    return this.makeRequest('post', url, params);
  }

  getCurrenciesDetails(start, params) {
    return this.get(`v1/cryptocurrency/listings/latest?start=${start}&limit=10`, params);
  }
}
