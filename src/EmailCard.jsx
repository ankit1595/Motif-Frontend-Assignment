import React from "react";

const EmailCard = (props) => {
  const { from_email, from_name, id, short_description, subject, read, favorite } = props.data;
  return (
    <div className={`email-card ${read ? "read": ""}`} onClick={() => props.handleOpenEmail(id, props.data)}>
      <div className="avatar">{from_name[0]}</div>
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
          {favorite && <b style={{ color: "#E54065", marginLeft: "20px" }}>Favorite</b>}
        </small>
      </div>
    </div>
  );
};

export default EmailCard;
