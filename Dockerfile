FROM node:lts

WORKDIR /user/src

COPY ./package.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]