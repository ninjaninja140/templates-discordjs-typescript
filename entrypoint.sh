#!/bin/sh

# Add any pre-start commands here that won't be ran during build.

exec node dist/Entrypoint.mjs
