ARG BASE_TAG
ARG BASE=public.ecr.aws/infra-blocks/docker-typescript-lambda-base:${BASE_TAG}

FROM ${BASE}
COPY tsconfig.json tsconfig.build.json package.json package-lock.json ./
COPY src ./src
RUN npm ci && \
    npm run build && \
    npm prune --production && \
    rm -rf src tsconfig.json tsconfig.build.json
