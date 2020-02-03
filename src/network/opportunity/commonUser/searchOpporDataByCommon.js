import axios from '../../axios'

export function searchOpporDataByCommon(cid) {
  return axios({
    url: '/CommonUser/searchRelatedOpportunities',
    method: 'post',
    params: {
      cid
    }
  })
}
