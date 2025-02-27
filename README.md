# app_weather ;)
![build status](https://github.com/praisetompane/app_weather/actions/workflows/app_weather_merge.yml/badge.svg) <br>

## Objectives
- A toy weather application to experiment with the full life-cycle of a React Single Page Application.

## Project Structure

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
- Run unit and integration tests
    ```shell
    pnpm run test
    ```

### Building the app for production deployment
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
![Alt text](/previewimages/homepage.png?raw=true "Optional Title")

##### 1. Retrieve 5 day weather forecast

![Alt text](/previewimages/fivedayweather.png?raw=true "Optional Title")

##### 2. Drill down to 3 hour interval weather forecasts
![Alt text](/previewimages/hourlyweather.png?raw=true "Optional Title")

##### 3. Drill into the details of a specific hourly forecast
![Alt text](/previewimages/detailedweather.png?raw=true "Optional Title")


### References

##### Thanks to https://github.com/tylermcginnis/react-fundamentals-curriculum for the base style sheet
