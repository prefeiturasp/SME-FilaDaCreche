# For more details: https://stackoverflow.com/questions/48595829/how-to-pass-environment-variables-to-a-frontend-web-application
FROM node:10.15.3-alpine as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run-script build

FROM nginx:1.15.12-alpine
COPY --from=builder /app/build /usr/share/nginx/html

COPY ./entrypoint.sh /
RUN chmod +x entrypoint.sh

# replace strings, this way we can pass parameters to static files.
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]