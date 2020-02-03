import axios from '../axios'

export function selectGoodsInfo(goodsName,minCost,maxCost,minAmount,MaxAmount,minDate,maxDate) {
  return axios({
    url: '/Admin/searchGoods',
    method: 'post',
    params: {
      goodsName,
      minCost,
      maxCost,
      minAmount,
      MaxAmount
    },
    data: {
      minDate,
      maxDate
    }
  })
}
