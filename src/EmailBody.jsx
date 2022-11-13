import React from "react";

const EmailBody = (props) => {
  return (
    <div className="email-body">
      <div className="avatar">A</div>
      <div className="email-body-content">
        <div className="email-body-topbar">
          <h1>Lorem Ipsum</h1>
          <button className="favorite-btn">Mark as favorite</button>
        </div>
        <time dateTime="2020-02-26 10:20">26/02/2020 10:20am</time>
        <div dangerouslySetInnerHTML={{__html: props.body}}/>
      </div>

      {/* <div className="email-body-topbar">
        <div className="flex">
          <h1>Lorem Ipsum</h1>
        </div>
        <button className="favorite-btn">Mark as favorite</button>
      </div>
      <div className="email-body-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <small>
          <time dateTime="2020-02-26 10:20">26/02/2020 10:20am</time>
          <b style={{ color: "#E54065", marginLeft: "20px" }}>Favorite</b>
        </small>
      </div> */}
    </div>
  );
};


export default EmailBody;
