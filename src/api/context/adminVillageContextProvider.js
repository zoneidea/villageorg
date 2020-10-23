/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { hostname } from "api/host/hostname";


import { GetVillageInformation } from "api/fetch/getVillageInformation";
import { AdminGetLandmark } from "api/fetch/admin/adminGetLandmark";
import { AdminGetFood } from "api/fetch/admin/adminGetFood";
import { AdminGetAccomodation } from "api/fetch/admin/adminGetAccomodation";
import { AdminGetProduct } from "api/fetch/admin/adminGetProduct";
import { render } from "@testing-library/react";
import { useTranslation } from "react-i18next";

const AdminVillageContext = React.createContext();

const AdminVillageContextProvider=({children,history})=> {

  const [informationData, setInformationData] = useState({
    owner: null,
    name: null,
    province: null,
    district: null,
    banner: [],
  });

  const [landmarkData,setLandmarkData] = useState([])
  const [foodData,setFoodData] = useState([])
  const [accomodationData,setAccomodationData] = useState([])
  const [productData,setProductData] = useState([])

  useEffect(() => {
    GetVillageInformation().then(res=>{
      setInformationData({
        owner: res.data[0].name_admin + " " + res.data[1],
        name: res.data[0].villagename,
        province: res.data[0].province_village,
        district: res.data[0].district_village,
        banner: [
          res.data[0].villagepic_1,
          res.data[0].villagepic_2,
          res.data[0].villagepic_3,
        ],
      });
      console.log(res.data);
    })
    AdminGetFood().then(data => {setFoodData(data)});
    AdminGetLandmark().then(data => setLandmarkData(data));
    AdminGetAccomodation().then(data => setAccomodationData(data));
    AdminGetProduct().then(data => setProductData(data));
  }, [])

  return (
    <AdminVillageContext.Provider value={{informationData,landmarkData,foodData,accomodationData,productData}}>
      {children}
    </AdminVillageContext.Provider>
  );
}

export { AdminVillageContextProvider, AdminVillageContext };
