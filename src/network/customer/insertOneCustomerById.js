import axios from '../axios'

export function insertCustomerById(id, thename, cusPriority, sources, tel, trendType, descriptions) {
  return axios({
    url: '/Admin/insertOneCustomer',
    method: 'post',
    params: {
      id
    },
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
