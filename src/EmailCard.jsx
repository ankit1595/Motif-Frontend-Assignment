import React from "react";

const EmailCard = (props) => {
  const { from_email, from_name, id, short_description, subject } = props.data;
  return (
    <div className="email-card" onClick={() => props.handleOpenEmail(id)}>
      <div className="avatar">A</div>
      <div className="card-content">
        <div>
          From:{" "}
          <b>
            {from_name} &lt;{from_email}&gt;{" "}
          </b>
        </div>
        <div>
          Subject: <b>{subject}</b>
        </div>
        <p>{short_description}</p>
        <small>
          <time dateTime="2020-02-26 10:20">26/02/2020 10:20am</time>
          <b style={{ color: "#E54065", marginLeft: "20px" }}>Favorite</b>
        </small>
      </div>
    </div>
  );
};

export default EmailCard;
