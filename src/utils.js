 
export const setHeaders =  access_token  =>  new Headers({
  // 'Authorization': 'Bearer BQD4VHIGU62o3JnWFMGqs8ndsQJCSmh5t31WiYQ_Ceh9uWCfygWml_qMXd-gGdbwQpnGnraR8M1PqSDZPK3P1DVuqOkmb7HsXy_RlgQKhqX14e2_szYPpNXa2Hjlx87SWMP-slveqdejeksZQz90t10ZYeNKFForrusX' , 
   'Authorization': 'Bearer '+access_token , 
  'Content-Type': 'application/json'
})

export  const refreshToken =async () => {
  const fields = "grant_type=refresh_token&refresh_token=AQBGqVQXfvOrheZoXqpHoh2ZOQ6yrT_VXy36hGEzrzqyLWcAdBmT21UEjB9xa1HwySyaKxns0w1qFl_qTJG5kjWuvLYRqDdxvlimRNWq-1IzDySl72q445MxYBqDSQ1uBII&client_id=78ddd16c16e43884672d93a4a299bd0a59878fc3";
const urlRefresh = "https://accounts.spotify.com/api/token?"+fields;

const response = await fetch(urlRefresh, {
method: 'POST',
headers: {
'Authorization': 'Basic NmRiNzRiNGNhZTllNDE2ZjkxYmZjMjA3Mjg1NGEzMWQ6M2MyMzVkZmNjNzQzNDRkNmE4OWZiMDcyZjNkMTUzOTQ=',
// 'Content-Type': 'application/json'
'Content-Type': 'application/x-www-form-urlencoded',
},
});
let resp = await response.json()
 
return resp.access_token
} 


// curl -X "POST" -H "Authorization: Basic ZjM4ZjAw...WY0MzE=" -d grant_type=client_credentials https://accounts.spotify.com/api/token

// Client ID 6db74b4cae9e416f91bfc2072854a31d
// Client Secret 3c235dfcc74344d6a89fb072f3d15394

//client secret base64 encode M2MyMzVkZmNjNzQzNDRkNmE4OWZiMDcyZjNkMTUzOTQ=

//redirect uri ---->   https%3A%2F%2Fapi-university.com%2F


// curl -X "POST" -H "Authorization: Basic M2MyMzVkZmNjNzQzNDRkNmE4OWZiMDcyZjNkMTUzOTQ=" 
// -d grant_type=client_credentials https%3A%2F%2Fapi-university.com%2F  https://accounts.spotify.com/api/token



//curl -H "Authorization: Basic M2MyMzVkZmNjNzQzNDRkNmE4OWZiMDcyZjNkMTUzOTQ=" -d grant_type=authorization_code -d code=AQDClajzqejADPFvnoO1KrADlwz9GYxlglYjm42w6XvIInQ-3w3vrfwTJZIY55nnQfDO5ATevPo62M96Ra3AFVDzL3h0sTpbGVDOvMWUHI8L3evnqS6mOjp-hgQf3WoYLgEHLDuDF5Xq1DCnup7zhtUzoSZRersw95jC-uIkcZ_Q8gNFVc_K-YhVN-Mzjo-JcZNg12CGp_4Ukity7eRuWgbz -d redirect_uri=https%3A%2F%2Fapi-university.com https://accounts.spotify.com/api/token





//https://api-university.com/?code=AQDClajzqejADPFvnoO1KrADlwz9GYxlglYjm42w6XvIInQ-3w3vrfwTJZIY55nnQfDO5ATevPo62M96Ra3AFVDzL3h0sTpbGVDOvMWUHI8L3evnqS6mOjp-hgQf3WoYLgEHLDuDF5Xq1DCnup7zhtUzoSZRersw95jC-uIkcZ_Q8gNFVc_K-YhVN-Mzjo-JcZNg12CGp_4Ukity7eRuWgbz&state=34fFs29kd09

//,"refresh_token":"AQBfqc7PZYmOddwuB8E4YYzTwRW2tiCg1-FlIhC8yN2EK3Tt5VJf6jzr-T0xJrXB_57i3SJFjnCg5iD7sgJnlvDa4QGe2EBcqArlHU_8wyMpqOggz-Z2oJ2rRo-T5_VsqYE"