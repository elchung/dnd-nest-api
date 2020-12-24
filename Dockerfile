# specify the node base image with your desired version node:<version>
FROM node:10.16.0-alpine
ARG version
ARG bundled_file_name
RUN apk update && apk add bash && apk add tini && rm -rf /var/cache/apk/*
ADD ./${bundled_file_name} /home/node/app
ENV NODE_ENV=production
WORKDIR /home/node/app
EXPOSE 80
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "start"]
