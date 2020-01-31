import axios from '../axios'

export function updateSaleData(id, bindUser, thename, salary, score, trendType, descriptions,) {
  return axios({
    url: '/Admin/UpdateOneSaler',
    method: 'post',
    data: {
      id,
      bindUser,
      thename,
      salary,
      score,
      trendType,
      descriptions,
    }
  })
}
