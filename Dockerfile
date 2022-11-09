FROM node:14

WORKDIR /freeboard_market_frontend/
COPY . /freeboard_market_frontend/

RUN yarn install
RUN yarn build

CMD yarn start