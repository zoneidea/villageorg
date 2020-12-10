import Axios from "axios";
import { hostname } from "../host/hostname";

export const GetShopName = async (id, type) => {
    if (type == 'product') {
        let req = await Axios({
            // headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
            method: "post",
            url: `${hostname}/GetShopName`,
            data: { id_shop_name: id },
        });
        let res = req;
        if (res.status === 200) {
            return res.data;
            //   setLandmarkData(res.data);
        }
    }
    else if (type == 'accomodation') {
        let req = await Axios({
            // headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
            method: "post",
            url: `${hostname}/GetHotelName`,
            data: { id_hotel_name: id },
        });
        let res = req;
        if (res.status === 200) {
            return res.data;
            //   setLandmarkData(res.data);
        }
    }
};
