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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          dicta ex ipsa mollitia sint dignissimos placeat vero sed animi sit,
          tenetur perferendis saepe nihil, tempore aut ut soluta vitae eum.
        </p>
      </div>
    </div>
  );
};

export default EmailCard;
