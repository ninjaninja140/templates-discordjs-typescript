FROM node:25-bullseye-slim AS base
WORKDIR /usr/src/app

COPY --chown=node:node .yarn/ .yarn/
COPY --chown=node:node src/ src/
COPY --chown=node:node yarn.lock .
COPY --chown=node:node package.json .
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .gitmodules .

RUN apt-get update -y && \
    apt-get install -y git

RUN git config --global --add safe.directory /usr/src/app
RUN git init
RUN git submodule init
RUN git submodule update

FROM base AS builder
COPY --chown=node:node tsconfig.json tsconfig.json
COPY --chown=node:node tsup.config.ts tsup.config.ts

RUN yarn install --immutable && \
    yarn tsup

FROM base AS runner
#COPY --chown=node:node .env .env
COPY --chown=node:node --from=builder /usr/src/app/dist dist
COPY --chown=node:node --from=builder /usr/src/app/node_modules/ node_modules/
COPY --chown=node:node entrypoint.sh entrypoint.sh

RUN yarn workspaces focus --all --production
RUN chown node:node /usr/src/app
RUN chmod +x ./entrypoint.sh

ENV NODE_ENV="production"

USER node

ENTRYPOINT ["./entrypoint.sh"]