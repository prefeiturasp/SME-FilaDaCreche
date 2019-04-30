#!/bin/sh
# Replace string in static files
# sed -i "s/old-text/new-text/g" input.txt
# Example:
# docker run  -p 8000:80 -e API_URL="http:\/\/mysite.com\/api\/v1" -e MAP_API_URL="ANOTHER URL" marcelomaia/fila_da_crech:latest
# try on local:
# sed -i "s/SCHOOLS_API_ENDPOINT_REPLACE_ME/http:\/\/localhost:8080\/v1/g" build/static/js/main*.js
# sed -i "s/MAPS_API_ENDPOINT_REPLACE_ME/http:\/\/localhost:777/g" build/static/js/main*.js

set -xe
  : "${API_URL?Need an api url}"
sed -i "s/SCHOOLS_API_ENDPOINT_REPLACE_ME/$API_URL/g" /usr/share/nginx/html/static/js/main*.js
sed -i "s/MAPS_API_ENDPOINT_REPLACE_ME/$MAP_API_URL/g" /usr/share/nginx/html/static/js/main*.js

exec "$@"
