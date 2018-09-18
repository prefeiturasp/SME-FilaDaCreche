import API from 'configs/Api';

export default function sendAPIRequest(longitude, latitude, groupCode) {
  return fetch(
    `${API.schools_api_endpoint_wait}/${longitude}/${latitude}/${groupCode}`
  ).then(res => res.json());
}
