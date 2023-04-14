FROM dockerpull.aexp.com/appsec/node:12.15.0

WORKDIR /app

COPY package.json /app

RUN npm install 

EXPOSE 4000

CMD ["npm", "start"]