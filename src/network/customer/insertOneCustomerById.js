import axios from '../axios'

export function insertCustomerById(id, thename, cusPriority, sources, tel, trendType, descriptions) {
  return axios({
    url: '/Admin/insertOneCustomer?id='+id,
    method: 'post',
    data: {
      id: "",
      thename,
      cusPriority,
      sources,
      tel,
      trendType,
      descriptions,
    }
  })
}
