import React from "react";

const EmailBody = (props) => {
  const { id, from_name, subject, body, favorite } = props.emailData;

  return (
    <div className="email-body">
      <div className="avatar">{from_name[0]}</div>
      <div>
        <div className="email-body-topbar">
          <h1>{subject}</h1>
          <button
            className="favorite-btn"
            onClick={() => props.markAsFavorite(id)}>
            {favorite ? "Remove from favorite" : "Mark as favorite"}
          </button>
        </div>
        <time dateTime={props.date.replaceAll("/", "-")}>{props.date}</time>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default EmailBody;
