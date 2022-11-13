import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";

const EmailList = (props) => {
  const { emailListData, handleOpenEmail } = props;

  return (
    <main className="email-list">
      {emailListData.map((item) => (
        <EmailCard
          key={item.id}
          data={item}
          handleOpenEmail={handleOpenEmail}
        />
      ))}
    </main>
  );
};

export default EmailList;
