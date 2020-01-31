import axios from '../axios'

export function deleteOneProfile(clientid,id) {
  return axios({
    url: '/Admin/DeleteOneClient',
    method: 'post',
    data: {
      clientid,
      id
    }
  })
}
