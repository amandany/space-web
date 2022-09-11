export const getData = async () => {
  let requestOptions = {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // mode: "no-cors",
    body: JSON.stringify({ jsonrpc: "2.0", method: "vpsOsConfig", params: {} }),
  };

  return fetch("https://api.sweb.ru/notAuthorized/", requestOptions)
  .then((res) =>
//   console.info(res)
    res.json(),
  );
};
