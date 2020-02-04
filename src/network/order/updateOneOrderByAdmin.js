import axios from '../axios'

export function updateOneOrderByAdmin(id, createTime, sId, cId, goodsIds, amounts, cost, isOpen, descriptions,) {
  return axios({
    url: '/Admin/updateOneOrder',
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
