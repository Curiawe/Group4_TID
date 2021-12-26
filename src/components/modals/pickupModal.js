import React from "react";

import { useState } from "react";
import "./modal.css";
import { ButtonNoLink, ButtonOnChange } from "../buttons/ColorButton";
import { BillCarAs } from "./pickupReturnTransferComponents/billCarAs";
import { SelectedCar } from "./pickupReturnTransferComponents/car";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import { StartingMileage } from "./pickupReturnTransferComponents/mileage";
import { StartingFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import FetchFunctions from "../DB-functions/FetchFunctions";
import updateEntries from "../DB-functions/UpdateEntries";
import { bookingStates } from "../../data/bookingStates";

const PickupModal = (props) => {

  const [car, setCar] = useState(null);
  const [billAs, setBillAs] = useState("");
  const [mileage, setMileage] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [comment, setComment] = useState("");

  function onClickSave () {
    if (!car) {
      alert("Please select a car for this pickup.")
    } else {
        updateEntries.updateBookingForPickup(props.selectedBooking, car, 
          FetchFunctions.fetchGroupFromGroupNameString(billAs), mileage, fuel, comment)
    }
    props.onConfirm() 
  }

  function onClickOverrideStatus (e) {
    e.preventDefault();
    alert(`Opened Pickup for booking ${props.selectedBooking}. If you opened this view by accident, select 'Go Back'.`)
    props.setBookingState("Booked")
  }

  //Logic:
/**
 * 1) if the car is selected, update all other states
 * 2) Track other state changes
 * 3) write to booking object
 * 4) write to car object
 * 4) change car status
 * 5) re-direct to success/ do success alert, close modal
 */

  if (!props.showPickupModal) {
    return null;

  } else if (props.showPickupModal && !props.selectedBooking) {
    return (
      <div className="overlay" >
        <div className="overlayContent">
          <div className="overlayTitle" style={{padding:"16px"}}>
            <div style={{marginBottom:"32px"}}>Please select a booking before proceeding with Pickup.</div>
            <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Go back"
            onClick={props.onClose}/>
            </div>
        </div>
      </div>
      )
  }

  else if (props.showPickupModal && props.selectedBooking) {
    if (props.bookingStatus !== bookingStates.BOOKED)
    return (
      <div className="overlay">
      <div className="overlayContent" style={{display:"flex", justifyContent:"center", alignContent: "center", textAlign:"center", padding:"32px"}}>
        <div className="overlayBody">
          <h4>Can't pick up selected booking.</h4>
          <p>This booking cannot be picked up. It is currently <strong>"{props.bookingStatus}"</strong>. A booking should be "Booked" for you to start the pickup process.</p>
          <div className="overlayFooter" style={{display:"flex", alignContent:"space-evenly"}}>
            <ButtonOnChange
                color="DarkBlueBtn"
                primary="true"
                className="buttonLarge"
                title="Go Back"
                onClick={props.onClose}
              />
              <ButtonNoLink
                color="DarkRedBtn"
                primary="true"
                className="buttonSmall"
                title="Pick up Anyway"
                onClick={(e) => onClickOverrideStatus(e)}
              />

          </div>
        </div>
      </div>
    </div>
    ); else {
      return (
        <div className="overlay">
          <div className="overlayContent">
            <div className="overlayTitle">
              <h3>Pickup</h3>
              <p>bookingID: {props.selectedBooking}</p>
            </div>
            <div className="overlayBody">
              {/* Customer Info Works now */}
              <CustomerInfo booking={props.selectedBooking}/>
              {/*The SelectedCar here depends on Marìna's "Find Cars" function */}
              <SelectedCar selected={car} onSelect={(newCar)=> setCar(newCar)}/> 
              {/* BillCarAs can now set the billAs state */}
              <BillCarAs selected={billAs} onChange={(newGroup) => setBillAs(newGroup)} />
              <StartingMileage mileage={mileage} onChange={(miles) => setMileage(miles)} />
              <StartingFuel fuel={fuel} onChange={(level) => setFuel(level)} />
              <Comments comment={comment} onChange={(input) => setComment(input)} />
            </div>
            <div className="overlayFooter">
              <ButtonOnChange
                color="DarkBlueBtn"
                primary="false"
                className="buttonLarge"
                title="Go Back"
                onClick={props.onClose}
              />
              <ButtonOnChange
                color="DarkBlueBtn"
                primary="true"
                className="buttonLarge"
                title="Save & Start"
                onClick={() => onClickSave()} // Check if everything else works
              />
            </div>
          </div>
        </div>
      );
    };
    
    }
  }

export default PickupModal;
