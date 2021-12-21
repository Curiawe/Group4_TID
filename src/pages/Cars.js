import LargeCardBody from "../components/cards/CardsForOverview";
import { CARS } from "../data/cars";
import "../components/cards/cards.css";

function Cars() {
  const cards = [];

  CARS.map((selCar) => {
    cards.push(
      <div key={selCar.License} className="cardMargin">
        <LargeCardBody car={selCar.License} />
      </div>
    );
  });

  return (
    <>
      <div className="pageTitle">
        <h1>Car Overview</h1>
      </div>
      <div className="pageContent">
        <div className="box">
          <div className="cardPageMargin">{cards}</div>
        </div>
      </div>
    </>
  );
}

export default Cars;
