FROM node:carbon
LABEL maintainer="Jackfiallos"

ENV NODE_ENV=dev

ADD package.json /package.json
WORKDIR /var/app
ADD . /var/app

EXPOSE 3000
EXPOSE 35729

RUN yarn install

ENTRYPOINT ["/bin/bash", "/var/app/run.sh"]
CMD ["start"]
