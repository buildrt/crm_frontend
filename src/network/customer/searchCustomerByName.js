import axios from '../axios'

export function searchCustomerByName(thename) {
  return axios({
    url: '/Admin/SelectCustomer',
    method: 'post',
    params: {
      thename
    }
  })
}
