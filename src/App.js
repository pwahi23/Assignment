import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <>
      <section className="main-container">
        <h2>SpaceX Launch Programs</h2>
        <div className="main-wrapper">
          <div className="filter-wrapper">
              <strong>Filters</strong>
          </div>
          <div className="filter-content__wrapper">
            <div className="filter-content__wrapper--card">
              <div className="img-wrapper">
              </div>
              <div className="cards-content__wrapper">
                <strong>FalconSat #1</strong>
                <div className="mission-details">
                  <p>
                    <strong>Mission Id's</strong>
                    <span>Telsa1, Tesla2</span>
                  </p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="filter-content__wrapper--card">
              <div className="img-wrapper">
              </div>
              <div className="cards-content__wrapper">
                <strong>FalconSat #1</strong>
                <div className="mission-details">
                  <p>
                    <strong>Mission Id's</strong>
                    <span>Telsa1, Tesla2</span>
                  </p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="filter-content__wrapper--card">
              <div className="img-wrapper">
                <img src="https://images2.imgbox.com/52/09/eNvilptL_o.png" alt="SpaceX" />
              </div>
              <div className="cards-content__wrapper">
                <strong>FalconSat #1</strong>
                <div className="mission-details">
                  <p>
                    <strong>Mission Id's:</strong>
                    <span>Telsa1, Tesla2</span>
                  </p>
                  <p>
                    <strong>Launch Year:</strong>
                    <span>2020</span>
                  </p>
                  <p>
                    <strong>SuccessFul Launch:</strong>
                    <span>Success</span>
                  </p>
                  <p>
                    <strong>SuccessFul Landing:</strong>
                    <span>Success</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="filter-content__wrapper--card">
              <div className="img-wrapper">
              </div>
              <div className="cards-content__wrapper">
                <strong>FalconSat #1</strong>
                <div className="mission-details">
                  <p>
                    <strong>Mission Id's</strong>
                    <span>Telsa1, Tesla2</span>
                  </p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>  
    <footer>
    <div className="footer">
      <strong>Developed By: </strong>
      <span>Prateek Wahi</span>
    </div>
  </footer>
  </>
  );
}

export default App;
