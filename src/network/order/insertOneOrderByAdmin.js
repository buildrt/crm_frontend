import axios from '../axios'

export function insertOneOrderByAdmin(id, createTime, sId, cId, goodsIds, amounts, cost, isOpen, descriptions,) {
  return axios({
    url: '/Admin/createOneOrder',
    method: 'post',
    data: {
      id,
      createTime,
      sId,
      cId,
      goodsIds,
      amounts,
      cost,
      isOpen,
      descriptions,
    }
  })
}
