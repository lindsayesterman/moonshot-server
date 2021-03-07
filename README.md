# Project Finder API

Check out the client repo here: https://github.com/lindsayesterman/project-finder

Check out the live site here: https://project-finder.vercel.app/

## Authorization

There is no authorization required for this app.

## Requests

Submit a club POST request in this format:

```javascript
{
    "id": 1,
    "name": "example project",
    "description": "this is a test project.",
    "features": "features separated by commas here",
    "author": "project creator ",
    "topic": "tech",
    "date_created": "now()"
}
```

## Endpoints

* Show all clubs : `GET /api/clubs/`
* Post a club : `POST /api/clubs/`
* Delete a club : `DELETE /api/clubs/:club_id/`
* Modify a club : `PATCH /api/clubs/:club_id/`
* Get specific club : `GET /api/clubs/:club_id`


## Status Codes

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
