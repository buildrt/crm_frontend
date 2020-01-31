import axios from '../axios'

export function searchMyFullData(id) {
  return axios({
    url: '/CommonUser/CommonUserSearchSelf',
    method: 'post',
    data: {
      id
    }
  })
}
