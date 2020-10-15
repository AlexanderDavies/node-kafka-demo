# Default Typescript Api Template

## Summary

## Getting Started

This API requires node `12.16.3` or greater.

To run this locally:

    1. Run: `yarn (or NPM) run start:dev`

    2. Run: docker-compose up

    3. Launch [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

    4. Execute POST / Message example

    5. Navigate to http://localhost:3030/kafka-topics-ui/#/ to check view the message topic and the messages sent 
 
    5. Check console to view the messages subscribed and output from the kafka message channel

### Accessing the Swagger UI

By default if you have the API running locally, you can access the Swagger UI by pointing your browser to [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## YARN (or NPM) Commands

Runs unit tests
    yarn test

Run unit tests in debug
    yarn run test:debug

Run unit test coverage
    yarn run coverage

Start in debug mode
    yarn run start:debug

Format code 
    yarn run prettify

### Folder structure

- reports - test reports
- src - all source code 
    - api - all of the api business code and components
        - shared
            - middleware - shared middleware e.g. auth, error handling etc.
            - models - shared models e.g. constants
            - utils - shared utils
            - index.controllers.js - import all controllers here for use in open api routing
            - index.middleware.js - import all middleware here for use in open api routing
            - open-api.yaml the route and param definitions conforming with open api 3.0 and used to spin up routes and perform paramater validations
        - components: component structured controllers, services and middleware
            - health check - deafault health check route
    - app.ts - registration of all middleware
    - server.ts - initialize the api
- test - supertest integegration tests (note: unit tests should be placed next to the file in the api folder)

## Configuration

All configuration settings are stored in `env`

| Variable | Allow Options         | Default | Notes |
| -------- | --------------------- | ------- | ----- |
| port     | any number above 1000 | 3000    |       |

