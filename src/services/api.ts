import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: 'https://frontend.karpovcourses.net/api/v2/ru'
});