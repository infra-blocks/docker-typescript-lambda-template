ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine AS builder
COPY tsconfig.json tsconfig.build.json package.json package-lock.json /lambda/
COPY src /lambda/src
RUN cd /lambda/ && \
    npm ci && \
    npm run build && \
    npm prune --production && \
    rm -rf src tsconfig.json tsconfig.build.json

FROM node:${NODE_VERSION}-alpine
# Copy the lambda bundle.
COPY --from=builder /lambda/dist /lambda/dist
COPY --from=builder /lambda/package.json /lambda/package.json
COPY --from=builder /lambda/node_modules /lambda/node_modules
# Install dependencies required for aws-lambda-ric
RUN apk add --no-cache --update --repository=https://dl-cdn.alpinelinux.org/alpine/v3.16/main/ libexecinfo-dev && \
    apk add --no-cache --update autoconf automake build-base cmake libtool libgsasl python3 && \
    # Install the AWS Lambda Runtime Interface Client.
    npm i -g aws-lambda-ric
# The entrypoint is a small wrapper around aws-lambda-ric.
COPY docker/lambda/entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["dist/index.handler"]
