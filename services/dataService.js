import axios from 'axios';

const GH_URL = "https://raw.githubusercontent.com/mateo-14/personal-web-data/main"
export function getAboutData() {
  return axios.get(`${GH_URL}/about/data.json`).then((res) => res.data);
}

export function getLinks() {
  return axios.get(`${GH_URL}/links/data.json`).then((res) => res.data);
}

export function getProjects() {
  return axios.get(`${GH_URL}/portfolio/projects/data.json`).then((res) => res.data);
}
