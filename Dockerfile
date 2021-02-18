FROM node:lts

ENV BASE_DIR=/opt/atajo/
WORKDIR ${BASE_DIR}

ADD package*.json ${BASE_DIR}

RUN npm install

ADD . ${BASE_DIR}
RUN npm run build

CMD node --max-old-space-size=5120 dist/main.js
