let schools_api_endpoint = process.env.REACT_APP_SCHOOLS_API_ENDPOINT;
let schools_api_endpoint_wait = `${schools_api_endpoint}/schools/radius/wait`;
let maps_api_endpoint = process.env.REACT_APP_MAPS_API_ENDPOINT;

if (process.env.NODE_ENV === "production") {
  schools_api_endpoint = "SCHOOLS_API_ENDPOINT_REPLACE_ME";
  schools_api_endpoint_wait =
    "SCHOOLS_API_ENDPOINT_REPLACE_ME/schools/radius/wait";
  maps_api_endpoint = "MAPS_API_ENDPOINT_REPLACE_ME";
}

export default {
  schools_api_endpoint: schools_api_endpoint,
  schools_api_endpoint_wait: schools_api_endpoint_wait,
  maps_api_endpoint: maps_api_endpoint
};
