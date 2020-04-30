# How to use this API?

## 1. Register
- Method: POST
- API url: ```/register```
- Body: {
	"username": "your_username",
	"password": "your_password", // example Aa@1234 
	"password_confirm": "rewrite_your_password",
	"licensePlate": "your_licensePlate"
}
- Server's response: {
    "SERVER_RESPONSE": 1,
    "message": "Chào mừng your_username đã đến với V-ID",
    "token": "the_token",
    "userid": "your_user_id"
}

## 2. Login
- Method: POST
- API url: ==/login==
- Body: {
	"username": "your_username",
	"password": "your_password"
}
- Server's response: {
    "SERVER_RESPONSE": 1,
    "message": "Đăng nhập thành công. Xin chào your_username",
    "token": "the_token",
    "userid": "your_user_id"
}

## 3. Logout
- Method: GET
- API url: ==/logout/{token}==
- Body: **none**
- Server's response: *Logged out*

## 4. Get latest location
- Method: GET
- API url: ==/get-latest-location?token={your_token}&userid={your_userid}==
- Body: **none**
- Server's response: {
    "SERVER_RESPONSE": 1,
    "message": "Chào mừng bạn đã sử dụng V-ID",
    "movementData": {
        "speed": the_speed, //Number
        "lat": the_latitude_value, //Number
        "lng": the_longitude_value //Number
}

## 5. Put new information
- Method: PUT,
- API url: ==/put-new-information==
- Body: {
	"information": [
			{
				"name": "the_name",
				"date": "the_date"
			},
      .....
		],
	"userId": "your_userid"
}
- Server's response: [
    {
        "createdAt_String": "Thu Apr 30 2020 00:50:35 GMT+0700 (Indochina Time)",
        "_id": "the_id_of_this_information",
        "hostId": "the_id_of_vehicle",
        "name": "the_name",
        "fixedDate_String": "the_fixed_date",
        "createdAt_Number": 1588182667214,
        "__v": 0
    },
    .....
]
