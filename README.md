# Journaler

### An Open Source Journaling App

## Endpoints

### User Authentication

---

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

### Users

---

#### [POST] /api/users/:user_id/journals

Allows an **authenticated user** to create a new journal

**Inputs:**

| Field         | Type   | Required | Unique |
| ------------- | ------ | -------- | ------ |
| title         | string | yes      | no     |
| journal_entry | string | yes      | no     |

**Output:**

```
{
  "message": "Successfully created new journal",
  "newJournal": {
    "journal_id": "7",
    "user_id": "1",
    "title": "Walk with my dog",
    "journal_entry": "I walked my dog to the park and enjoyed the sunset.",
    "created_at": "2022-01-30T15:53:53.542Z",
    "updated_at": "2022-01-30T15:53:53.542Z"
  }
}
```

#### [GET] /api/users/:user_id/journals

Allows an **authenticated user** to retrieve an array of all their journals

**Output:**

```
[
  {
    "journal_id": "1",
    "title": "Playing with old friends",
    "journal_entry": "I had a blast hanging out",
    "created_at": "2022-01-30T18:04:57.048Z",
    "updated_at": "2022-01-30T18:04:57.048Z"
  },
  {
    "journal_id": "4",
    "title": "Just Joe",
    "journal_entry": "Joe joe, joe joe... joe! ...joe?",
    "created_at": "2022-01-30T18:04:57.048Z",
    "updated_at": "2022-01-30T18:04:57.048Z"
  },
  ...
]
```

#### [DEL] /api/users/:user_id/journals/:journal_id

Allows an **authenticated user** to delete one of their journals

**Output:**

```
{
  message: "Deleted journal 3"
}
```

### Journals

---

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
