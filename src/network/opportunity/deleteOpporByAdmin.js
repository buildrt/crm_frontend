import axios from '../axios'

export function deleteOpporByAdmin(id) {
  return axios({
    url: '/Admin/deleteOneOpportunities',
    method: 'post',
    params: {
      id
    }
  })
}
