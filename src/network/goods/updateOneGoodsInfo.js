import axios from '../axios'

export function updateOneGoodsInfo(id, thename, thetype, amount, cost, thelocation, sources, descriptions, intime, isreleased) {
  return axios({
    url: '/Admin/updateOneGoods',
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
      isreleased
    }
  })
}
