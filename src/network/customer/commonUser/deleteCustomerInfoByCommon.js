import axios from '../../axios'

export function deleteCustomerInfoByCommon(id) {
  return axios({
    url: '/CommonUser/DeleteOneCustomer',
    method: 'post',
    params: {
      id
    }
  })
}
