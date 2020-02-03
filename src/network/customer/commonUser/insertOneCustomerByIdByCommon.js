import axios from '../../axios'

export function insertCustomerByIdByCommon(id, thename, cusPriority, sources, tel, trendType, descriptions) {
  return axios({
    url: '/CommonUser/insertOneCustomer',
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
