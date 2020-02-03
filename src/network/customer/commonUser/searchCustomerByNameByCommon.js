import axios from '../../axios'

export function searchCustomerByNameByCommon(thename) {
  return axios({
    url: '/CommonUser/SelectCustomer',
    method: 'post',
    params: {
      thename
    }
  })
}
