FROM madnificent/ember:3.0.0 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod


FROM cecemel/ember-fastboot-proxy-service:0.6.0

ENV ASSETS "^/(assets/|font/|files/|sitemap.xml)"

COPY --from=builder /app/dist /app
