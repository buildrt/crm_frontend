import axios from '../../axios'

export function insertOpporByCommon(id, createTime, sid, cid, thename, sta, descriptions, credit, changeTime) {
  return axios({
    url: '/CommonUser/addOneOpportunities',
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
