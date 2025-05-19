# Lesson-02-BEP-CRUD-Postman

**PREVIOUSLY**
- Creating a simple API
- Express GET and POST endpoints
- Making requests with curl

**TODAY**
- Express DELETE, PUT and PATCH endpoints
- Testing endpoints using Postman
- status code

## Express DELETE, PUT amd PATCH edpoints

- API generally need to do 4 things: CRUD
    - Create
    - Read
    - Update
    - Delete

- The method defines what operation to do
- The URL defines what kind of resource is targeted
- The headers help describe the request
- The body is the payload of the request
    - For example, what to create

- Let's list a few imaginary API endpoints

    - `GET /users` - Read (list) all users
    - `GET /users/1` - Read one specific user with the ID 1 
    - `GET /users/John` - Read one specific user with the username john

    - `POST /comments` - Create new comment based on request body payload
    - `POST /producs` - Create new poduct based on request body payload

    - `DELETE /users` - Delete all users
    - `DELETE /users/1` - Delete spcific user with the ID 1

    - `PUT /users/1` - Replace user with the ID 1 bsaed on request body payload
    - `PATCH /users/1` - Update user with the ID 1 bsaed on request body payload

- PUT and PATCH are both update operations
    - Both recieve a request body
    **In theory** `PUT /users/1` replaces the old user with the payload
    **In theory** `PATCH /users/1` updates the old user with the payload

- Let's imagine we have this user