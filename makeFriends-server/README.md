# 接口文档

## 目录：
[1、注册](#1注册)<br/>
[2、登陆](#2登陆)<br/>
[3、更新用户信息](#3更新用户信息)<br/>
[4、获取当前的user(根据cookie)](#4获取当前的user(根据cookie))<br/>
[5、获取用户列表](#5获取用户列表)<br/>
[6、获取当前用户的聊天消息列表](#6获取当前用户的聊天消息列表)<br/>
[7、 修改指定消息为已读](#7修改指定消息为已读)<br/>


## 1、注册

### 请求URL：
	localhost:3000/register

### 请求方式：
	POST

### 参数类型

	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码
	|type        |Y       |string   |类型

### 返回示例：
	成功:
	    {
	      "code": 0,
	      "data": {
	        "_id": "5ae133e621388d262c8d91a6",
	        "username": "qwer",
	        "type": "boy"
	      }
	    }
	失败
	    {
	      "code": 1,
	      "msg": "此用户已存在"
	    }


## 2、登陆

### 请求URL：
	localhost:3000/login

### 请求方式：
	POST

### 参数类型

	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码

### 返回示例：
	成功:
	    {
	      "code": 0,
	      "data": {
	        "_id": "5ae1338a21388d262c8d91a5",
	        "username": "qwer",
	        "type": "boy",
	        "__v": 0
	      }
	    }
	失败
	    {
	      "code": 1,
	      "msg": "用户名或密码错误"
	    }

## 3、更新用户信息

### 请求URL：
	localhost:3000/update

### 请求方式：
	POST

### 参数类型：

	|参数		|是否必选 |类型     |说明
	|header    |Y       |string   |头像名称
	|age       |N       |string   |年龄
	|hobby     |N       |string   |爱好
	|salary    |N       |string   |月薪
	|education |N       |string   |学历
	|character |N       |string   |性格
	|style |N       |string   |类型

### 返回示例：
	成功:
	    {
		    "code": 0,
		    "data": {
		        "header": "头像1",
		        "age": "18",
		        "hobby": "篮球",
		        "education": "本科",
		        "salary": "12K",
		        "_id": "5ae1f088d37a442b749fc143",
		        "username": "qwer",
		        "type": "boy"
		    }
		}
	失败
	    {
	      "code": 1,
	      "msg": "请先登陆"
	    }


## 4、获取当前的user(根据cookie)

### 请求URL：
	localhost:3000/user

### 请求方式：
	GET

### 参数类型

	无

### 返回示例：
	成功:
	    {
		    "code": 0,
		    "data": {
		        "_id": "5ae1f088d37a442b749fc143",
		        "username": "qwer",
		        "type": "boy",
		        "__v": 0,
		        "salary": "12K",
		        "education": "本科",
		        "character": "性格",
		        "age": "18",
		        "header": "头像1"
		    }
		}
	失败
	    {
	      "code": 1,
	      "msg": "请先登陆"
	    }


## 5、获取用户列表

### 请求URL：
	localhost:3000/userlist

### 请求方式：
	GET

### 参数类型

	|参数		|是否必选 |类型     |说明
	|type       |Y       |string   |类型(boy/girl)

### 返回示例：
	{
	    "code": 0,
	    "data": [
	        {
	            "_id": "5ae1d5d19151153d30e008fd",
	            "username": "qwer",
	            "type": "boy",
	            "__v": 0
	        },
	        {
	            "_id": "5ae1ddd99ca58023d82351ae",
	            "username": "aa",
	            "type": "girl",
	            "__v": 0,
	            "hobby": "篮球",
	            "character": "性格",
	            "header": "头像1"
	        }
	    ]
	}
	

## 6、获取当前用户的聊天消息列表

### 请求URL：
	localhost:3000/msglist

### 请求方式：
	GET

### 参数类型
	无

### 返回示例：
	{
	    "code": 0,
	    "data": {
	        "users": {
	            "5ae1d5d19151153d30e008fd": {
	                "username": "qwer"
	            },
	            "5ae1ddd99ca58023d82351ae": {
	                "username": "aa",
	                "header": "头像1"
	            },
	            "5ae1df049ca58023d82351af": {
	                "username": "aa2"
	            },
	            "5ae1e72aa072c522e024b18e": {
	                "username": "bb",
	                "header": "头像3"
	            },
	            "5ae1f088d37a442b749fc143": {
	                "username": "boy",
	                "header": "头像2"
	            }
	        },
	        "chatMsgs": [
				{
	                "read": false,
	                "_id": "5ae1f3c3a95eb824841199f1",
	                "from": "5ae1f088d37a442b749fc143",
	                "to": "5ae1ddd99ca58023d82351ae",
	                "content": "aa",
	                "create_time": 1524757443374,
	                "__v": 0
	            }
			]
	    }
	}
