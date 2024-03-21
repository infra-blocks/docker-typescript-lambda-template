#!/bin/sh

export NODE_OPTIONS="--enable-source-maps"
aws-lambda-ric "${@}"
