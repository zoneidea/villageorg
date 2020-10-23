import Axios from "axios";
import { hostname } from "api/host/hostname";

export const GetFood = async (id) => {
  let req = await Axios({
    // headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
    method: "post",
    url: `${hostname}/VisitGetFoodVillage`,
    data: { villageid:id },

  });
  let res = req;
  if (res.status === 200) {
    return res.data;
    //   setLandmarkData(res.data);
  }
};
