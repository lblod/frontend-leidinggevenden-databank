FROM node:20 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM redpencil/fastboot-app-server:1.3.0

COPY --from=builder /app/dist /app
