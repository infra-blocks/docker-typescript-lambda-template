# docker-typescript-lambda-template
[![Build](https://github.com/infra-blocks/docker-typescript-lambda-template/actions/workflows/build.yml/badge.svg)](https://github.com/infra-blocks/docker-typescript-lambda-template/actions/workflows/build.yml)
[![Build Image](https://github.com/infra-blocks/docker-typescript-lambda-template/actions/workflows/build-image.yml/badge.svg)](https://github.com/infra-blocks/docker-typescript-lambda-template/actions/workflows/build-image.yml)
[![Trigger Update From Template](https://github.com/infra-blocks/docker-typescript-lambda-template/actions/workflows/trigger-update-from-template.yml/badge.svg)](https://github.com/infra-blocks/docker-typescript-lambda-template/actions/workflows/trigger-update-from-template.yml)
[![codecov](https://codecov.io/gh/infra-blocks/docker-typescript-lambda-template/graph/badge.svg?token=0RPDQQFJBA)](https://codecov.io/gh/infra-blocks/docker-typescript-lambda-template)

This template is for git repositories holding AWS Lambda Docker images.

## Instantiating the template

Upon instantiating the template repository, developers should do the following:
- Remove the [trigger update from template workflow](.github/workflows/trigger-update-from-template.yml)
- Update the README.md header and project description, in addition to this section.
- Redirect the badges to the correct repository. Note that the codecov ones should be taken from the SAAS directly,
  as it will likely have a different token.
- Update the package.json to replace the template repo for the new one
- Configure Codecov
- Remove/update the code owners file.
- Rename the service and the docker image in the [docker compose](./docker/docker-compose.yml) file.
 
## Set up

This project leverages `docker compose` and `nvm`. Developers need to install both.
Once installed, set up the project by running the following commands:
```shell
nvm install
npm install
npm run compile && npm run lint && npm run test
```
