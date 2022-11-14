import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";

const EmailList = (props) => {
  const { emailListData, handleOpenEmail, date } = props;

  return (
    <main className="email-list">
      {emailListData.map((item) => (
        <EmailCard
          key={item.id}
          data={item}
          handleOpenEmail={handleOpenEmail}
          date={date}
        />
      ))}
    </main>
  );
};

export default EmailList;
