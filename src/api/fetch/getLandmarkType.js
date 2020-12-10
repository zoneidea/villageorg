import Axios from "axios";
import { hostname } from "../host/hostname";

export const GetLandmarkType = async (id) => {
    let req = await Axios({
        method: "post",
        url: `${hostname}/getTypeLandmarkVillage`,
        data: { id_village: id },
    });
    let res = req;
    if (res.status === 200) {
        return res.data;
    }
};
