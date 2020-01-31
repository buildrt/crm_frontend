import axios from '../axios'

export function deleteSaleData(id) {
  return axios({
    url: '/Admin/DeleteOneOrMoreSaler',
    method: 'post',
    data: {
      id
    }
  })
}
