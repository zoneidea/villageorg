import Axios from "axios";
import { hostname } from "../host/hostname";

export const GetAccomodation = async (id) => {
  let req = await Axios({
    // headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
    method: "post",
    url: `${hostname}/VisitGetAccomodationVillage`,
    data: { villageid:id },
  });
  let res = req;
  if (res.status === 200) {
    return res.data;
    //   setLandmarkData(res.data);
  }
};
