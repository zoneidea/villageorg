import Axios from 'axios';
import { hostname } from "../host/hostname";

export const GetVillageInformation = async (id) => {
    let req = await Axios({
      method: "post",
      url: `${hostname}/VisitgetVillage`,
      data: {
        villageid: id,
      },
    });
    let res = req;
    if (res.status === 200) {
        return res;
    }
  };