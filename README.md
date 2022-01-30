# Journaler

### An Open Source Journaling App

## Endpoints

### User Authentication

#### [POST] /api/auth/register

Allows a user to register for a new account

**Inputs:**

| Field    | Type   | Required | Unique | Notes                              |
| -------- | ------ | -------- | ------ | ---------------------------------- |
| username | string | yes      | yes    | must contain at least 3 characters |
| password | string | yes      | no     | must contain at least 6 characters |

**Output:**

```
{
  "message": "Successfully registered!",
  "userInfo": {
    "id": "1",
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
  "message": "Welcome, joe_smith!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpvZV9zbWl0aCIsImlhdCI6MTY0Mjk5NDI4MCwiZXhwIjoxNjQzMDgwNjgwfQ.1Aa5tZfOsHxy0rMGg5rqP3pVPEr6ufCHuDWtwTKSF-w"
}
```

<!-- ===== User Router Docs ===== -->

### Users

#### [POST] /api/users/:user_id/journals

Allows an **authenticated user** to create a new

**Inputs:**

| Field         | Type   | Required | Unique |
| ------------- | ------ | -------- | ------ |
| title         | string | yes      | no     |
| journal_entry | string | yes      | no     |

Note: A token is required

**Output:**

```
{
  "message": "Successfully created new journal",
  "newJournal": {
    "journal_id": "7",
    "user_id": "1",
    "title": "bobobobo",
    "journal_entry": "ha  ahahah lol",
    "created_at": "2022-01-30T15:53:53.542Z",
    "updated_at": "2022-01-30T15:53:53.542Z"
  }
}
```

<!-- ===== Journal Router Docs ===== -->

### Journals

#### [GET] /api/journals

Sends an array containing all existing journals

**Output:**

```
[
  {
        "journal_id": "1",
        "user_id": "1",
        "title": "Eating lunch at local restaurant",
        "journal_entry": "Ate a grass fed hamburger at it was great.",
        "created_at": "2022-01-29T03:35:50.986Z",
        "updated_at": "2022-01-29T03:35:50.986Z"
    },
    {
        "journal_id": "2",
        "user_id": "3",
        "title": "Biking at night",
        "journal_entry": "Went out on a nighttime bike ride, and it felt awesome.",
        "created_at": "2022-01-29T03:35:50.986Z",
        "updated_at": "2022-01-29T03:35:50.986Z"
    },
    {
        "journal_id": "3",
        "user_id": "4",
        "title": "New bench press personal record",
        "journal_entry": "Attempted 225lbs twice and got it on my second try!",
        "created_at": "2022-01-29T03:35:50.986Z",
        "updated_at": "2022-01-29T03:35:50.986Z"
    },
    ...
]
```
