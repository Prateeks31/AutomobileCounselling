import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";

function TestForm({ data, ...props }) {
  const [cars, setCars] = useState({
    Budget: null,
    Terrain: null,
    AvgMonthlyRunning: null,
    DrivingStyle: null,
    EaseinHighTraffic: null,
    SafetyExpectation: null,
    MileageExpectation: null,
    BodyType: null,
    Featuristic: null,
    PreferredBrand: null,
    Transmission: null,

  });
  let [results, setResults] = useState([]);
  const handleChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value });
  };
  const showFilters = async (e) => {
    e.preventDefault();
    setResults([]);
    data = data.data;


    for (let i = 0; i < data.length; i++) {
      console.log(cars.AvgMonthlyRunning);
      console.log(data[i].AvgMonthlyRunning);
      if ((cars.Budget !== null ? (data[i].Budget === cars.Budget) : true) && (cars.Terrain !== null ? (data[i].Terrain === cars.Terrain) : true) && (cars.AvgMonthlyRunning !== null ? (data[i].AvgMonthlyRunning === cars.AvgMonthlyRunning) : true) && (cars.DrivingStyle !== null ? (data[i].DrivingStyle === cars.DrivingStyle) : true) && (cars.EaseinHighTraffic !== null ? (data[i].EaseinHighTraffic === cars.EaseinHighTraffic) : true) && (cars.SafetyExpectation !== null ? (data[i].SafetyExpectation === cars.SafetyExpectation) : true) && (cars.MileageExpectation !== null ? (data[i].MileageExpectation === cars.MileageExpectation) : true) && (cars.BodyType !== null ? (data[i].BodyType === cars.BodyType) : true) && (cars.Featuristic !== null ? (data[i].Featuristic === cars.Featuristic) : true) && (cars.PreferredBrand !== null ? (data[i].PreferredBrand === cars.PreferredBrand) : true) && (cars.Transmission !== null ? (data[i].Transmission === cars.Transmission) : true)) {
        setResults((oldArray) => [...oldArray, data[i]]);
      }
    }
    console.log(results);
  };
  console.log(cars);
  console.log(results);
  return (
    <>
      <div className="Box1">
        <img src="./counsel.png" />
      </div>
      <div className="Box2">
        <h2 className="head1">
          Confused which car to buy in this festive season ?
        </h2>
        <Form>
          <Form.Select
            name="Budget"
            aria-label="Budget"
            onChange={handleChange}
          >
            <option value={null}>What is your Expected budget?</option>

            <option value="4-5 Lacs">4-5 Lacs</option>
            <option value="5-6 Lacs">5-6 Lacs</option>
            <option value="6-7 Lacs">6-7 Lacs</option>
            <option value="7-8 Lacs">7-8 Lacs</option>
            <option value="8-9 Lacs">8-9 Lacs</option>
            <option value="9-10 Lacs">9-10 Lacs</option>
            <option value="10-11 Lacs">10-11 Lacs</option>
            <option value="11-12 Lacs">11-12 Lacs</option>
            <option value="12-13 Lacs">12-13 Lacs</option>
            <option value="13-14 Lacs">13-14 Lacs</option>
            <option value="14-15 Lacs">14-15 Lacs</option>
            <option value="15-16 Lacs">15-16 Lacs</option>
            <option value="16-17 Lacs">16-17 Lacs</option>
          </Form.Select>

          <br />

          <Form.Select
            name="AvgMonthlyRunning"
            aria-label="Avg Monthly Running"
            onChange={handleChange}
          >
            <option value={null}>
              What is your Expected avg monthly running?
            </option>
            <option value="Upto 800">upto 800 KM</option>
            <option value="Upto 1200">upto 1200 KM</option>
            <option value="Upto 1500">upto 1500 KM</option>
            <option value="Above 1500">1500+ KM</option>
            <option value="Upto 3000">upto 3000 KM</option>
          </Form.Select>
          <br />

          <Form.Select
            name="Terrain"
            aria-label="Terrain"
            onChange={handleChange}
          >
            <option values={null}>
              In which terrain you gonna use the car?
            </option>
            <option value="Plains">Plains</option>
            <option value="Hills">Hills</option>
            <option value="Plains & Hills">Plains and Hills</option>
            <option value="Perfect for all">Perfect for All</option>
          </Form.Select>
          <br />
          <Form.Select
            name="EaseinHighTraffic"
            aria-label="Ease in High Traffic"
            onChange={handleChange}
          >
            <option value={null}>
              Share us About Your Use In High Traffic?
            </option>
            <option value="Yes">YES</option>
            <option value="No">NO</option>
          </Form.Select>
          <br />
          <Form.Select
            name="SafetyExpectation"
            aria-label="Safety Expectation"
            onChange={handleChange}
          >
            <option value={null}>What are Your Safety expectations?</option>
            <option value="Less than 2"> less than 2</option>
            <option value="Less than 3">less than 3</option>
            <option value="3 Star"> 3 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="5 Star">5 Star</option>
          </Form.Select>
          <br />
          <Form.Select
            name="MileageExpectation"
            aria-label="MileageExpectation"
            onChange={handleChange}>
            <option value={null}>Mileage with which you are satisfied?</option>
            <option value="Upto 12 Kmpl">Upto 12 Kmpl</option>
            <option value="Upto 15 Kmpl">Upto 15 Kmpl</option>
            <option value="Upto 16 Kmpl"> Upto 16 Kmpl</option>
            <option value="Upto 20 Kmpl">Upto 20 Kmpl</option>
            <option value="Upto 22 Kmpl">Upto 22 Kmpl</option>
            <option value="Upto 24kmpl"> Upto 24kmpl</option>
          </Form.Select>
          <br />
          <Form.Select
            name="DrivingStyle"
            onChange={handleChange}
            aria-label="DrivingStyle">
            <option value={null}>Your Driving Style?</option>
            <option value="Decent"> Decent</option>
            <option value="Rough">Rough</option>
            <option value="Drivers Delight">Drivers Delight</option>
          </Form.Select>
          <br />
          <Form.Select
            name="BodyType"
            onChange={handleChange}
            aria-label="BodyType">
            <option value={null}>Preffered Body Type?</option>
            <option value="Entry Hatchback"> Entry Hatchback</option>
            <option value="Micro Suv">Micro Suv</option>
            <option value="Compact Suv">Compact Suv</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
          </Form.Select>
          <br />
          <Form.Select
            name="Featuristic"
            onChange={handleChange}
            aria-label="Featuristic">
            <option value={null}>Your requirement on Features?</option>
            <option value="Low"> Low</option>
            <option value="Mid">Mid</option>
            <option value="High">High</option>
          </Form.Select>
          <br />
          <Form.Select
            name="PreferredBrand"
            onChange={handleChange}
            aria-label="PreferredBrand">
            <option value={null}>Your Preffered Brand?</option>
            <option value="Hyundai"> Hyundai</option>
            <option value="Mahindra"> Mahindra</option>
            <option value="Toyota">Toyota</option>
            <option value="Tata"> Tata</option>
            <option value="Maruti">Maruti Suzuki</option>
            <option value="Nissan">Nissan</option>
            <option value="Renault">Renault</option>
          </Form.Select>
          <br />
          <Form.Select
            onChange={handleChange}
            name="Transmission" aria-label="Transmission">
            <option value={null}>Your Preffered transmission Type?</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </Form.Select>
          <br />

          <Button onClick={showFilters} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div >
          {results.map((element, index) => (
            <li key={index}> {element.Car} </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestForm;
