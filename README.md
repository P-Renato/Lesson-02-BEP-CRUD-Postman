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

 ```json
        {
            "id": 1,
            "name": "John",
            "role": "User"
        }
        ```

- **in theory** `PUT /users/1` with payload `{ id:1, role: "Admin" }`
        - The payload replaces the existing user
        - We would be left with only `{ id:1, role: "Admin" }` without name
        - We probably should not allow the ID to change...

- **in theory** `PATCH /users/1` with payload `{ id:1, role: "Admin" }`
        - We look at the existing data and update the changed values
        - We would be left with `{ id:1, name: "John", role: "Admin" }` 

- In practice, this is not always so straightforward
    - Sometimes PUT actually does what PATCH should
    - Sometimes just the id is unchangeable (as it should be)
    - Sometimes the request is `PUT /users` with `{ id:1, role: "Admin" }`
        - The ID is read from the request
    - The real world is messy
    - People are messy

- With a large application, you can have hundreds of endpoints
    - Testing can be very difficult
    - `curl` is fantastic, but can't do everything
    - We learn a new tool called Postman for testing our API
    - It is not the only one, but it is the leading tool for API testing

## REST API theory

- REST: Representational State Transfer
    - A very, very common system for designing web APIs
    - Like `jsonplaceholder.typicode.com`
    - Works well together with the HTTP protocol

- REST APIs use HTTP methods to implement CRUD
    - Create...POST
    - Read.....GET
    - Update...PUT and PATCH
    - Delete...DELETE

- The method defines what operation to do
- The URL defines which kind of resource is targeted
- The headers help describe the request
- The body is the payload of the request
    - For example, what to create or update

- The backends we generally build are APIs
    - Maybe not completely pure REST APIs
    - But mostly RESTful :)
    - They grant access to control stored data via endpoints

- Very very commonly APIs respond with the same type of data they take in
    - We'll also now start to use JSON basically for all data exchange


### HTTP Status codes

- What does "Error 404" mean?

- The 404 is an HTTP status code
    - The HTTP protocol defines a lot of status codes
    - They are used to communicate the result of a request

- The status code is a number
    - The first digit defines the general category
    - The next two digits define the specific status

- Some common status codes:
    - 200 OK
    - 201 Created
    - 204 No Content
    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 404 Not Found
    - 405 Method Not Allowed
    - 500 Internal Server Error

- Using correct status codes is important
    - It helps the client understand what happened
    - It helps the client know what to do next
    - It's good practice for REST APIs