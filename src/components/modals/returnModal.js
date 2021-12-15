import { React, useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { ReturnFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { ReturnTime } from "./pickupReturnTransferComponents/arrivalTime";
import { ReturnMileage } from "./pickupReturnTransferComponents/mileage";
import { ReturnCarState } from "./pickupReturnTransferComponents/carState";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";

const ReturnModal = (props) => {
  if (!props.showReturnModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Return</h3>
          <p>bookingID</p>
        </div>
        <div className="overlayBody">
          <CustomerInfo />
          <ReturnCarState />
          <ReturnTime />
          <ReturnMileage />
          <ReturnFuel />
          <Comments />
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
            title="Register Return"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnModal;