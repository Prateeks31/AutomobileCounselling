import React, { useEffect, useState } from "react";
import Navi from './Navi';
import Footer from './Footer';
import TestForm from './TestForm';
import axios from "axios";

function App() {
  const [data,setData]=useState();
  const tazApi = async () => {
    try {
      const taz = await axios.get(
        `https://script.google.com/macros/s/AKfycbwFIghaJ76kESDZAbUgt4j8ofXfiGiLsxxG4MHCtRcE1yJErBVbXv_Etei8_rPKkjPo/exec`
      );
      console.log(taz);
      setData(()=> taz.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const [values, setValues] = useState([{
  //   Car : "",
  //   Budget : "",
  //   AvgMonthlyrunning: "",
  //   Terrain: "",
  //   DrivingStyle:"",
  //   EaseinHighTraffic: "",
  //   Featuristic: "",
  //   MileageExcpectation:"",
  //   PreferredBrand:"",
  //   SafetyExpectation:"",
  //   Transmission:"",
  //   BodyType : "", 
  // }])

  useEffect(() => {
    tazApi(); 
    // eslint-disable-next-line
  }, []);
 //one time render api reload only
  console.log("prateek");

  return (
    <>
      <Navi />
      <TestForm data={data}  /> 
      {/* passed complete data to form */}
      <Footer />
    </>
  );
}

export default App;
