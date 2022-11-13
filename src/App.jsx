import { useEffect, useState } from "react";
import "./App.css";
import EmailBody from "./EmailBody";
import EmailList from "./EmailList";

function App() {
  const [emailListData, setEmailListData] = useState([]);
  const [emailBodyData, setEmailBodyData] = useState("");
  const [toggleEmailOpen, setToggleEmailOpen] = useState(false);

  useEffect(() => {
    fetch("https://6366339879b0914b75cba9c2.mockapi.io/api/email")
      .then((response) => response.json())
      .then((data) =>
        setEmailListData(
          data.map((item) => ({ ...item, read: false, favorite: false }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  function fetchEmailBody(id, emailData) {
    setToggleEmailOpen(false);
    fetch(`https://6366339879b0914b75cba9c2.mockapi.io/api/email/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmailBodyData({ ...data, ...emailData });
        setToggleEmailOpen(true);
      })
      .catch((err) => console.error(err));
  }

  function handleOpenEmail(id, emailData) {
    console.log("clicked id:", id, emailData);
    // setToggleEmailOpen((prevState) => !prevState);
    fetchEmailBody(id, emailData);
  }

  function markAsFavorite(id) {
    console.log("favourite marked, ", id);
    const emailData = [...emailListData];
    emailData.map((item, index) => {
      if(item.id === id){
        emailData[index] = {...item, favorite: !item.favorite}
      }
    })
    setEmailListData(emailData);

    setEmailBodyData(prevState => ({...prevState, favorite: !prevState.favorite}))
  }
  return (
    <>
      <nav className="filter-nav">
        <ul>
          Filter By:
          <li>Unread</li>
          <li>Read</li>
          <li>Favorites</li>
        </ul>
      </nav>
      <div className="App">
        <EmailList
          emailListData={emailListData}
          handleOpenEmail={handleOpenEmail}
        />
        {toggleEmailOpen && (
          <EmailBody
            emailData={emailBodyData}
            markAsFavorite={markAsFavorite}
          />
        )}
      </div>
    </>
  );
}

export default App;
