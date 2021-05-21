const baseUrl = process.env.REACT_APP_API_URL;

export const getMunicipalities = async () => {
  return fetch(baseUrl + "municipality", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const newMunicipality = async (municipality, manager) => {
  return fetch(baseUrl + "municipality", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      name: municipality.name,
      adress: municipality.adress,
      email: municipality.email,
      telephone: municipality.telephone,
      state: "activo",
      website: municipality.website,
      manager: manager,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};
