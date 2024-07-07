# Stage 1: Compile and Build angular codebase
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run buildDocker


# Stage 2: Serve app with nginx server
FROM nginx:latest
COPY nginx.conf /etc/nginx
COPY --from=build /usr/local/app/dist/ng-cv/browser /usr/share/nginx/html
EXPOSE 80