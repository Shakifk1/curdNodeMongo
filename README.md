use postman application for check CURD opration.

***************************************************
1.Create a User (POST):
POST http://localhost:3000/api/users
Body (JSON):
{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
}
*************************************************

2.Read All Users (GET):
GET http://localhost:3000/api/users
*************************************************

3.Read Single User (GET):
GET http://localhost:3000/api/users/<user_id>
*************************************************

 4.Update a User (PATCH):
 PATCH http://localhost:3000/api/users/<user_id>
 Body (JSON):
 {
   "age": 35
 }
**************************************************
5.Delete a User (DELETE):
DELETE http://localhost:3000/api/users/<user_id>
