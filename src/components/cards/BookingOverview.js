import { useState } from "react";
import "./cards.css";
import "../booking.css";
import BookingCard from "./CardsForBooking";
import { ButtonOnChange } from "../buttons/ColorButton";
import BOOKINGS from "../../data/bookings";
import PickupModal from "../modals/pickupModal";
import ReturnModal from "../modals/returnModal";
import BookingModal from "../modals/bookingModal";
import FeatherIcon from "feather-icons-react";
import SearchBar from "../inputfields+dropdowns/searchBar";
import FetchFunctions from "../DB-functions/FetchFunctions";

function BookingOverviewCont() {
  const cards = [];
  const [selectedBooking, setSelectedBooking] = useState("");
  const [bookingState, setBookingState] = useState("")
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  console.log("Booking and booking Status: " + selectedBooking + ": " + bookingState)

  function handleSelect (e, ref) {
    e.preventDefault();
    if (selectedBooking === ref) { //if I want to set it to the same thing again
      setSelectedBooking(""); // clear the selection instead
      setBookingState("")
    } else {
      setSelectedBooking(ref);
      setBookingState(FetchFunctions.fetchBookingFromRef(ref).Status)

    }
  }

  BOOKINGS.map((bkng) => {
    cards.push(
      <div key={bkng.Ref} className="cardMargin">
        <BookingCard booking={bkng.Ref} 
          onClick={(e, ref) => handleSelect(e, ref)}  />
      </div>
    );
    return null;
  });

  return (
    <div style={{ marginLeft: "32px" }}>
      <div className="header">
        <div className="title">
          <h1>Booking Overview</h1>
        </div>
      </div>
      <div className="searchBarMargin">
        <div className="searchElements">
          <SearchBar
            placeholder="Search bookings"
            onChange={(e) => console.log(e.target.value)} // To-Do: implement search
          />
        </div>
        <div className="bookingOvBtn1">
          <ButtonOnChange
            color="PurpleBtn"
            primary="true"
            className="buttonMedium"
            title="Pickup"
            onClick={() => setShowPickupModal(true)}
          />
          <PickupModal
            showPickupModal={showPickupModal}
            onClose={() => setShowPickupModal(false)}
            onConfirm={() => setShowPickupModal(false)}
            selectedBooking={selectedBooking}
            bookingStatus={bookingState}
            setBookingState={(input) => setBookingState(input)}
          ></PickupModal>
          <ButtonOnChange
            color="LightBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Return"
            onClick={() => setShowReturnModal(true)}
          />
          <ReturnModal
            showReturnModal={showReturnModal}
            onClose={() => setShowReturnModal(false)}
            onConfirm={() => setShowReturnModal(false)}
            selectedBooking={selectedBooking}
            bookingStatus={bookingState}
            setBookingState={setBookingState}
          ></ReturnModal>
          <div className="clickableIcon">
            <FeatherIcon icon="edit" className="icon" />
          </div>
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Add Booking"
            onClick={() => setShowBookingModal(true)}
          />
          <BookingModal
            showBookingModal={showBookingModal}
            onClose={() => setShowBookingModal(false)}
          ></BookingModal>
        </div>
      </div>
      <span> Selected Booking: {selectedBooking}</span>
      <div className="bookingCardMargin">{cards}</div>
    </div>
  );
}

export default BookingOverviewCont;
