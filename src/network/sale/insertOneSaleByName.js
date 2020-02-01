import axios from '../axios'

export function insertOneSaleByName(thename, salary, score, trendType, descriptions) {
  return axios({
    url: '/Admin/UsingNameToEstablishOneSaler',
    method: 'post',
    data: {
      id: "",
      bindUser: "",
      thename,
      salary,
      score,
      trendType,
      descriptions,
    }
  })
}
