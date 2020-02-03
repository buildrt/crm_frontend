import axios from '../axios'

export function updateOpporByAdmin(id, createTime, sid, cid, thename, sta, descriptions, credit, changeTime) {
  return axios({
    url: '/Admin/updateOneOpportunities',
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
