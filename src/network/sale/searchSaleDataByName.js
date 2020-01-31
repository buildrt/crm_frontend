import axios from '../axios'

export function searchSaleDataByName(thename) {
  return axios({
    url: '/Admin/UsingNameToSearch',
    method: 'post',
    data: {
      thename
    }
  })
}
