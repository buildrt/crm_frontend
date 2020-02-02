import axios from '../axios'

export function deleteCustomerInfo(id) {
  return axios({
    url: '/Admin/DeleteOneCustomer',
    method: 'post',
    params: {
      id
    }
  })
}
