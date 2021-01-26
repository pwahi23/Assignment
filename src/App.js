import './App.scss';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import querystring from 'querystring';
import loader from './rocket.gif';
function App() {
  const API_BASE_URL = "https://api.spacexdata.com/v3/launches?limit=100";
  const [uniqueLaunchYears, setUniqueLaunchYears] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [filters, setFilters] = useState({
    launch_year: undefined,
    launch_success: undefined,
    land_success: undefined
  })
  const updateDateFilters = async (url) => {
      const URL = getUpdatedURL(filters);
      let apiData = await axios.get(URL).then(response => response.data);
      setCardsData(apiData);
      setIsLoading(true);
  }

  const getYears = async () => {
    let apiData = await axios.get(API_BASE_URL).then(response => response.data);
    let tempArr = [];
    apiData.map(date => {
      if(!tempArr.includes(date.launch_year)) {
          tempArr.push(date.launch_year);
      }
    })
    setUniqueLaunchYears(tempArr);
}

  const getUpdatedURL = (filters = {}) => {
    return API_BASE_URL + "&" + querystring.stringify({ ...filters });
  }
  const handleClick = (value, type) => { 
    if (filters[type] === value) {
      value = undefined;
    }   
    setFilters(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  useEffect(() => {
    updateDateFilters(filters);
  }, [filters])

  useEffect(() => {
    getYears();
  },[])

  if (!isLoading) {
    return (
      <div className="loader-container">
        <img src={loader} className="w-100" alt="loading..." />
    </div>)
  }
  else {
    return (
      <div className="App">
        <Container fluid className="main-container">
          <h2>SpaceX Launch Programs</h2>
          <Row className="pt-3">
            <Col xs={12} sm={12} md={6} lg={3}>
              <Card className="main-wrapper">
                <Card.Body>
                    <Card.Title>
                        Filters
                    </Card.Title>
                    <Card.Text className="text-center pt-2">
                        Launch Year
                    </Card.Text>
                    <hr className="m-0"/>
                  <div className="launch-btn__wrapper">
                    {uniqueLaunchYears.length > 0 && uniqueLaunchYears.map((year, index) => {
                      return (<Button variant="success" key={index} className={
                        filters.launch_year === year ? "active" : ""} 
                        onClick={(event) => handleClick(event.target.value, 'launch_year')} value={year}>{year}</Button>)
                    })}
                  </div>
                  <Card.Text className="text-center pt-2">
                    Successful Launch
                  </Card.Text>
                  <hr className="m-0"/>
                  <div className="launch-btn__wrapper">
                    <Button value="true" variant="success" className={filters.launch_success === "true"
                              ? "active"
                              : ""
                          } onClick={(event) => handleClick(event.target.value, 'launch_success')}>
                        True
                    </Button>

                    <Button value="false" variant="success" className={filters.launch_success === "false"
                              ? "active"
                              : ""
                          } onClick={(event) => handleClick(event.target.value, 'launch_success')}>
                        False
                    </Button>
                  </div>
                  <Card.Text className="text-center pt-2">
                    Successful Landing
                  </Card.Text>
                  <hr className="m-0"/>
                  <div className="launch-btn__wrapper">
                    <Button value="true" variant="success" className={filters.land_success === "true"
                              ? "active"
                              : ""
                          } onClick={(event) => handleClick(event.target.value, 'land_success')}>
                        True
                    </Button>

                    <Button value="false" variant="success" className={filters.land_success === "false"
                              ? "active"
                              : ""
                          } onClick={(event) => handleClick(event.target.value, event.target.value)}>
                        False
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={9}>
              <Row className="filter-content__wrapper m-0">
              {cardsData.length > 0 && cardsData.map(cardData => {
                return(
                  <Col md={12} lg={3} className="mb-3">
                    <div className="filter-content__wrapper--card h-100">
                      <div className="img-wrapper" key={cardData.flight_number}>
                        <img src={cardData.links.mission_patch_small} alt="SpaceX" />
                      </div>
                      <div className="cards-content__wrapper">
                        <strong>{cardData.mission_name} #{cardData.flight_number}</strong>
                        <div className="mission-details pt-2">
                        {cardData.mission_id.length > 0 &&
                          <div>
                            <strong>Mission Id's:</strong>
                            <ul>
                              <li>{cardData.mission_id}</li>
                            </ul>
                          </div>
                        }
                          <p>
                            <strong>Launch Year:</strong>
                            <span>{cardData.launch_year}</span>
                          </p>
                          <p>
                            <strong>SuccessFul Launch:</strong>
                            <span>{cardData.launch_success ? "True" : "False"}</span>
                          </p>
                          <p>
                            <strong>SuccessFul Landing:</strong>
                            <span> {cardData.land_success ? "True" : "False"}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })}
              </Row>
            </Col>
          </Row>
      </Container>  
      <footer>
      <div className="footer">
        <strong>Developed By: </strong>
        <span>Prateek Wahi</span>
      </div>
    </footer>
    </div>
    );
  }
}

export default App;
