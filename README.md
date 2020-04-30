# How to use this API?

## 1. Register
- Method: **POST**
- API url: ```/register```
- Body: {&nbsp;
	"username": "your_username",&nbsp;
	"password": "your_password", // example Aa@1234 &nbsp;
	"password_confirm": "rewrite_your_password",&nbsp;
	"licensePlate": "your_licensePlate"&nbsp;
}
- Server's response: {&nbsp;
    "SERVER_RESPONSE": 1,&nbsp;
    "message": "Chào mừng your_username đã đến với V-ID",&nbsp;
    "token": "the_token",&nbsp;
    "userid": "your_user_id"&nbsp;
}

## 2. Login
- Method: **POST**
- API url: ```/login```
- Body: {&nbsp;
	"username": "your_username",&nbsp;
	"password": "your_password"&nbsp;
}
- Server's response: {&nbsp;
    "SERVER_RESPONSE": 1,&nbsp;
    "message": "Đăng nhập thành công. Xin chào your_username",&nbsp;
    "token": "the_token",&nbsp;
    "userid": "your_user_id"&nbsp;
}

## 3. Logout
- Method: **GET**
- API url: ```/logout/{token}```
- Body: **none**
- Server's response: *Logged out*

## 4. Get latest location
- Method: **GET**
- API url: ```/get-latest-location?token={your_token}&userid={your_userid}```
- Body: **none**
- Server's response: {&nbsp;
    "SERVER_RESPONSE": 1,&nbsp;
    "message": "Chào mừng bạn đã sử dụng V-ID",&nbsp;
    "movementData": {&nbsp;
        "speed": the_speed, //Number&nbsp;
        "lat": the_latitude_value, //Number&nbsp;
        "lng": the_longitude_value //Number&nbsp;
}

## 5. Put new information
- Method: **PUT**,
- API url: ```/put-new-information```
- Body: {&nbsp;
	"information": [&nbsp;
			{&nbsp;
				"name": "the_name",&nbsp;
				"date": "the_date"&nbsp;
			},&nbsp;
      .....&nbsp;
		],&nbsp;
	"userId": "your_userid"&nbsp;
}
- Server's response: [&nbsp;
    {&nbsp;
        "createdAt_String": "Thu Apr 30 2020 00:50:35 GMT+0700 (Indochina Time)",&nbsp;
        "_id": "the_id_of_this_information",&nbsp;
        "hostId": "the_id_of_vehicle",&nbsp;
        "name": "the_name",&nbsp;
        "fixedDate_String": "the_fixed_date",&nbsp;
        "createdAt_Number": 1588182667214,&nbsp;
        "__v": 0&nbsp;
    },&nbsp;
    .....&nbsp;
]
