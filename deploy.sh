#!/bin/bash

# Load env vars from .env file
set -a
source .env
set +a

git pull origin main

# Pass Vite env vars as build args (Vite inlines VITE_* at build time)
docker build \
  --build-arg VITE_POSTHOG_KEY="$VITE_POSTHOG_KEY" \
  --build-arg VITE_POSTHOG_HOST="$VITE_POSTHOG_HOST" \
  -t portfolio-app .

docker stop portfolio-app 2>/dev/null
docker rm portfolio-app 2>/dev/null
docker run -d -p 8080:8080 --name portfolio-app --restart unless-stopped portfolio-app
