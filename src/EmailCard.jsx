import React from "react";

const EmailCard = () => {
  return (
    <div className="email-card">
      <div className="avatar">A</div>
      <div className="card-content">
        <div>
          From: <b>Foo Bar &lt;foo.bar@gmail.com&gt; </b>
        </div>
        <div>
          Subject: <b>Lorem Ipsum</b>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <small>
          <time dateTime="2020-02-26 10:20">26/02/2020 10:20am</time>
          <b style={{ color: "#E54065", marginLeft: "20px" }}>Favorite</b>
        </small>
      </div>
    </div>
  );
};

export default EmailCard;
