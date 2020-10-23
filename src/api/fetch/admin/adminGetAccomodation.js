
  import Axios from "axios"
  import { hostname } from "api/host/hostname";

   export const AdminGetAccomodation = async () => {
    let req = await Axios({
      headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
      method: "get",
      url: `${hostname}/GetAccomodationVillage`
        });
    let res = req;
    if (res.status === 200) {
        return res.data
    //   setLandmarkData(res.data);
    }
  };