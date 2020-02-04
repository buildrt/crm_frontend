import axios from '../axios'

export function insertOneGoodsInfo(id, thename, thetype, amount, cost, thelocation, sources, descriptions, intime, isreleased) {
  return axios({
    url: '/Admin/addOneGoods',
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
