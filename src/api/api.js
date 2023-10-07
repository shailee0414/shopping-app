const fetchApi = (props) => {
  console.log(props);
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.unsplash.com/photos?client_id=FAssVuysbdWYYIpfnWIbYtB685_qCukQY_dsZSiM_YU`,
      {
        params: {
          query: props?.query,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log("EEEE", err);
        reject(err);
      });
  });
};
export default fetchApi;
