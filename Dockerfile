FROM node:21 AS base

WORKDIR /the_very_unique_weather_app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY . .

RUN pnpm install

EXPOSE 8080

CMD [ "pnpm", "run", "start" ]