import axios from '../../axios'

export function updateCustomerInfoByCommon(id, thename, cusPriority, sources, tel, trendType, descriptions) {
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
