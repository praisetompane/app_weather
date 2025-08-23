# app_weather ;)
![build status](https://github.com/praisetompane/app_weather/actions/workflows/app_weather_merge.yml/badge.svg) <br>

## Objectives
- A toy weather application to experiment with the full life-cycle of a React Single Page Application.

## Project Structure
- docs: project documentation lives in here.
- tests: test code lives in folder.

## Dependencies
- [Docker](https://docs.docker.com/get-started/)

## Setup Instructions
- The repository is configured to use [devcontainers](https://containers.dev) for development.
    - [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)

## Run Program
- To start system run
    ```shell
    # from root directory
    pnpm run start
    ```

## Testing
- ### Execute Tests
  ```shell
  pnpm run test
  ```

## Building and Deployment
```shell
# from root directory
pnpm install
```

```shell
# from root directory
pnpm run build
```

```shell
# from root directory
pnpm run deploy
```

## Git Conventions
- **NB:** the main is locked and all changes must come through a Pull Request.
- commit messages:
    - provide concise commit messages that describe what you have done.
        ```shell
        # example:
        git commit -m "feat(core): algorithm" -m"implement my new shiny faster algorithm"
        ```
    - screen shot of Githb view
    - references:
        - https://www.conventionalcommits.org/en/v1.0.0/
        - https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/

## Demo

##### 0. Homepage
![Alt text](/docs/homepage.png?raw=true "Optional Title")

##### 1. Retrieve 5 day weather forecast

![Alt text](/docs/fivedayweather.png?raw=true "Optional Title")

##### 2. Drill down to 3 hour interval weather forecasts
![Alt text](/docs/hourlyweather.png?raw=true "Optional Title")

##### 3. Drill into the details of a specific hourly forecast
![Alt text](/docs/detailedweather.png?raw=true "Optional Title")