import axios from 'axios';
import { url } from './API';

export function getCharacthers () {
  return axios.get(url(`people/`)).then(res => res.data);
}

