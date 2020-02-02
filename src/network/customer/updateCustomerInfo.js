import axios from '../axios'

export function updateCustomerInfo(id, thename, cusPriority, sources, tel, trendType, descriptions) {
  return axios({
    url: '/Admin/UpdateOneCustomer',
    method: 'post',
    data: {
      id,
      thename,
      cusPriority,
      sources,
      tel,
      trendType,
      descriptions,
    }
  })
}
