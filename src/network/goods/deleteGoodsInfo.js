import axios from '../axios'

export function deleteGoodsInfo(id, thename, thetype, amount, cost, thelocation, sources, descriptions, intime, isreleased) {
  return axios({
    url: '/Admin/deleteOneGoods',
    method: 'post',
    data: {
      id,
      thename,
      thetype,
      amount,
      cost,
      thelocation,
      sources,
      descriptions,
      intime,
      isreleased,
    }
  })
}
