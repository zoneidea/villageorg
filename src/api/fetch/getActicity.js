
  import Axios from "axios"
  import { hostname } from "api/host/hostname";

   export const GetActivity = async (id) => {
    let req = await Axios({
      method: "post",
      url: `${hostname}/VisitGetActivity`,
      data: { villageid: id },
    });
    let res = req;
    if (res.status === 200) {
        return res.data
    }
  };