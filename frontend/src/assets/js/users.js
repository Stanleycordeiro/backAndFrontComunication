import http from "./http";

const getUser = async function () {
  try {
    const {data} = await http.get("/api/users");

    console.log(data);
    console.log(response);
  } catch {
    console.log(error);
  }
};


export default getUser;