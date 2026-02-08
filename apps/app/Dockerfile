# Stage 1: Base
FROM node:24-alpine AS base
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# Stage 2: Prepare (turbo prune)
FROM base AS prepare
RUN npm install -g turbo@^2
COPY . .
RUN turbo prune app --docker

# Stage 3: Builder
FROM base AS builder
# Install dependencies first (cached layer)
COPY --from=prepare /app/out/json/ .
RUN npm ci
# Copy source and build
COPY --from=prepare /app/out/full/ .
RUN npm run build

# Stage 4: Runner (nginx for static files)
FROM nginx:alpine AS runner

# Create non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 --ingroup appgroup appuser

# Copy nginx config
COPY apps/app/docker.nginx.conf /etc/nginx/nginx.conf

# Copy built assets
COPY --from=builder --chown=appuser:appgroup /app/apps/app/dist /usr/share/nginx/html

# Use non-root user for nginx worker processes
RUN chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
