FROM node:21 AS base

WORKDIR /app_weather

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY . .

RUN pnpm install

EXPOSE 3030

CMD [ "pnpm", "run", "start" ]