import axios from '../../axios'

export function insertCustomerByIdByCommon(id, thename, cusPriority, sources, tel, trendType, descriptions) {
  return axios({
    url: '/CommonUser/insertOneCustomer?id='+id,
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
