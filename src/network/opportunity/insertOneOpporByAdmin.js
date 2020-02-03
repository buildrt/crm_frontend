import axios from '../axios'

export function insertOpporByAdmin(id, createTime, sid, cid, thename, sta, descriptions, credit, changeTime) {
  return axios({
    url: '/Admin/addOneOpportunities',
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
