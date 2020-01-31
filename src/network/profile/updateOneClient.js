import axios from '../axios'

export function updateOneClient(clientid,clientname,password,id,bindUserId,thename,gender,age,qq,tel,email,jobTime,jobInDate,valid,description) {
  return axios({
    url: '/Admin/UpdateOneClient',
    method: 'post',
    data: {
      "client": {
        "clientid": clientid,
        "clientname": clientname,
        "password": password,
      },
      "dataUser": {
        "id": id,
        "bindUserId": bindUserId,
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
