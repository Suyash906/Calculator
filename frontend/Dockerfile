FROM node:10.15.1 
RUN npm install -g http-server
#RUN npm run build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY build/ .
EXPOSE 3000
CMD ["http-server", "-p", "3000"]