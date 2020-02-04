import axios from '../../axios'

export function insertOneOrderByCommon(id, createTime, sId, cId, goodsIds, amounts, cost, isOpen, descriptions,) {
  return axios({
    url: '/CommonUser/createOneOrder',
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
