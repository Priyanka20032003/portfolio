import React from "react";
import "./Popup.css";

const Popup = ({ message, showPopup, closePopup }) => {
  if (!showPopup) return null; // Don't render the popup if showPopup is false

  return (
    <div className="popup">
      <h3 className="popupH3">{message}</h3>
      <div className="popupBtn">
        <button onClick={closePopup}>Ok</button>
      </div>
    </div>
  );
};

export default Popup;
