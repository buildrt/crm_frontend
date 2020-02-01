import axios from '../axios'

export function insertOneSaleById(id,thename, salary, score, trendType, descriptions) {
  return axios({
    url: '/Admin/UsingIDToEstablishOneSaler?id='+id,
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
