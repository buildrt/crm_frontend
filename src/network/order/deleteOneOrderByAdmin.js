import axios from '../axios'

export function deleteOneOrderByAdmin(id) {
  return axios({
    url: '/Admin/deleteOneOrder',
    method: 'post',
    params: {
      id
    }
  })
}
