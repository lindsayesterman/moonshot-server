# Project Finder API

Check out the client repo here: https://github.com/lindsayesterman/project-finder

Check out the live site here: https://project-finder.vercel.app/

## Authorization

There is no authorization required for this app.

## Responses

Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, Gophish returns a JSON response in the following format:

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

## Status Codes

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
