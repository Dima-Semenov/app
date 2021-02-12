const MAIN_URL = 'https://dima-semenov.github.io/app';

const request = (url) => {
  return fetch(`${MAIN_URL}${url}`)
    .then(response => {
      if (response.ok) {

        return response.json();
      }

    // eslint-disable-next-line no-throw-literal
    throw `${response.status} - ${response.statusText}`
  });
};

export const getPhones = () => {
  return request('/api/phones.json')
}

export const getInfoPhone = (id) => {
  return request(`/api/phones/${id}.json`)
}
