import axios from '../../axios'

export function selectOrderInfoByCommon(id) {
  return axios({
    url: '/CommonUser/searchOrders',
    method: 'post',
    params: {
      id
    }
  })
}
