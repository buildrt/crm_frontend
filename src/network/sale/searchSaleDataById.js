import axios from '../axios'

export function searchSaleDataById(id) {
  return axios({
    url: '/Admin/UsingIdToSearch',
    method: 'post',
    data: {
      id
    }
  })
}
