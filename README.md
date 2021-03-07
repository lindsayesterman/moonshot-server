# Project Finder API

Check out the client repo here: https://github.com/lindsayesterman/project-finder

Check out the live site here: https://project-finder.vercel.app/

## Summary

This API allows users to obtain and post projects for new devs to work on. It supports GET, POST, DELETE, and PATCH requests.

## Authorization

There is no authorization required for this app.

## Post request

Submit a project POST request as a JSON object:

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

* getAllProjects 
    - returns all projects : `GET /api/projects/`
* insertProject
    - posts a new project : `POST /api/projects/`
* deleteProject
    - deletes a specified project : `DELETE /api/projects/:project_id/`
* updateProject
    - modifies a specified project : `PATCH /api/projects/:project_id/`
* getById
    - gets a specified project : `GET /api/projects/:project_id`

## Paramaters 

| Name       | Type | In   |
|------------|------|------|
| project_id | int  | path |


## Status Codes

Project Finder returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
