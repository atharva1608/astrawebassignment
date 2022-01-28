import React from 'react';
import './FeedbackPopup.css';

const FeedbackPopup = props => {
    return (
      <div className="popup-box">
        <div className="box">
        {props.content}
        </div>
      </div>
    );
  };

 export default FeedbackPopup 
    