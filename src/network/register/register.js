import axios from '../axios'

export function register(username,password, phone, gender) {
  return axios({
    url: '/register',
    method: 'post',
    data: {
      username,
      password,
      phone,
      gender
    }
  })
}
