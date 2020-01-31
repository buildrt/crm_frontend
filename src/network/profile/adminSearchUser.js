import axios from '../axios'

export function adminSearchUser(thename,gender,age,qq,tel,email,jobTime,jobInDate,valid,description) {
  return axios({
    url: '/Admin/AdminSearchUser',
    method: 'post',
    data: {
      "id": "",
      "bindUserId": "",
      "thename": thename,
      "gender": gender,
      "age": age,
      "qq": qq,
      "tel": tel,
      "email": email,
      "jobTime": jobTime,
      "jobInDate": jobInDate,
      "valid": valid,
      "description": description,
    }
  })
}
