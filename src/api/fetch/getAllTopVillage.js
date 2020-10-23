import Axios from "axios";
import { hostname } from "api/host/hostname";

export const GetAllTopVillage = async (id) => {
  let req = await Axios({
    // headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
    method: "get",
    url: `${hostname}/GetAllTopVillage`,
  });
  let res = req;
  if (res.status === 200) {
    return res.data;
  } else {
    return "no data";
  }
};
