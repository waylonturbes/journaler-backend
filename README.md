# Journaler

### An Open Source Journaling App

## Endpoints

### User Authentication

#### [POST] /api/auth/register

Allows a user to register for a new account

**Inputs:**

| Field      | Type   | Required | Unique | Notes                              |
| ---------- | ------ | -------- | ------ | ---------------------------------- |
| first_name | string | no       | no     |
| last_name  | string | no       | no     |
| email      | string | yes      | yes    | must be in email format            |
| username   | string | yes      | yes    | must contain at least 3 characters |
| password   | string | yes      | no     | must contain at least 6 characters |

**Output:**

```
{
  "message": "Successfully registered!",
  "userInfo": {
    "id": 1,
    "first_name": "Joe",
    "last_name": "Smith",
    "email": "joe_smith@gmail.com",
    "username": "joe_smith"
  }
}
```

#### [POST] /api/auth/login

Allows a registered user to sign into their account

**Inputs:**

| Field    | Type   | Required |
| -------- | ------ | -------- |
| username | string | yes      |
| password | string | yes      |

**Output:**

```
{
  "message": "Welcome, Joe Smith!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpvZV9zbWl0aCIsImlhdCI6MTY0Mjk5NDI4MCwiZXhwIjoxNjQzMDgwNjgwfQ.1Aa5tZfOsHxy0rMGg5rqP3pVPEr6ufCHuDWtwTKSF-w"
}
```
