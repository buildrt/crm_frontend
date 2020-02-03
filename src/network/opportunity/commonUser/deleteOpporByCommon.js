import axios from '../../axios'

export function deleteOpporByCommon(id) {
  return axios({
    url: '/CommonUser/deleteOneOpportunities',
    method: 'post',
    params: {
      id
    }
  })
}
