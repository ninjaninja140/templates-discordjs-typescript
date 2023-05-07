FROM node:20-bullseye-slim AS base
WORKDIR /usr/src/app
COPY --chown=node:node yarn.lock .
COPY --chown=node:node package.json .
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/

FROM base AS builder
COPY --chown=node:node tsconfig.json tsconfig.json
COPY --chown=node:node src/ src/
RUN yarn install --immutable
RUN yarn tsc --noEmitOnError

FROM base AS runner
COPY --chown=node:node .env .env
COPY --chown=node:node --from=builder /usr/src/app/dist dist
RUN yarn workspaces focus --all --production
RUN chown node:node /usr/src/app
USER node
CMD ["yarn", "run", "start"]