import axios from '../../axios'

export function updateOpporByCommon(id, createTime, sid, cid, thename, sta, descriptions, credit, changeTime) {
  return axios({
    url: '/CommonUser/updateOneOpportunities',
    method: 'post',
    data: {
      id,
      createTime,
      sid,
      cid,
      thename,
      sta,
      descriptions,
      credit,
      changeTime
    }
  })
}
