import axios from 'axios';

export function sendMail({ email, name, message }) {
  return axios.post('https://getform.io/f/391d943d-d1f1-40cf-8a6f-cc8ee2660253', {
    email: email.trim(),
    name: name.trim(),
    message: message.trim(),
  });
}
