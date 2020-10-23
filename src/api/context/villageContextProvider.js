/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { hostname } from "api/host/hostname";


import { GetVillageInformation } from "api/fetch/getVillageInformation";
import { GetLandmark } from "api/fetch/getLandmark";
import { GetFood } from "api/fetch/getFood";
import { GetAccomodation } from "api/fetch/getAccomodation";
import { GetProduct } from "api/fetch/getProduct";
import { render } from "@testing-library/react";
import { useTranslation } from "react-i18next";

const VillageContext = React.createContext();

const VillageContextProvider=({children,history})=> {

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
    GetLandmark().then(data => setLandmarkData(data));
    GetFood().then(data => {setFoodData(data)});
    GetAccomodation().then(data => setAccomodationData(data));
    GetProduct().then(data => setProductData(data));
  }, [GetVillageInformation])

  return (
    <VillageContext.Provider value={{informationData,landmarkData,foodData,accomodationData,productData}}>
      {children}
    </VillageContext.Provider>
  );
}

export { VillageContextProvider, VillageContext };
