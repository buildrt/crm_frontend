import axios from '../axios'

export function addOneClient(clientname,password,thename,gender,age,qq,tel,email,jobTime,jobInDate,valid,description) {
  return axios({
    url: '/Admin/AddOneAClient',
    method: 'post',
    data: {
      "client": {
        "clientid": "",
        "clientname": clientname,
        "password": password,
      },
      "dataUser": {
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
    }
  })
}
