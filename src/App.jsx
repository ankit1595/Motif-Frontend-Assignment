import { useEffect, useState } from "react";
import "./App.css";
import EmailBody from "./EmailBody";
import EmailList from "./EmailList";

function App() {
  const [emailListData, setEmailListData] = useState([]);
  const [emailBodyData, setEmailBodyData] = useState("")
  const [toggleEmailOpen, setToggleEmailOpen] = useState(false);

    useEffect(() => {
      fetch("https://6366339879b0914b75cba9c2.mockapi.io/api/email")
        .then((response) => response.json())
        .then((data) => setEmailListData(data));
    }, []);

  function fetchEmailBody(id) {
    fetch(`https://6366339879b0914b75cba9c2.mockapi.io/api/email/${id}`)
      .then((response) => response.json())
      .then((data) => setEmailBodyData(data.body));
  }

  function handleOpenEmail(id) {
    console.log("clicked id:", id);
    setToggleEmailOpen((prevState) => !prevState);
    fetchEmailBody(id);
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
        {toggleEmailOpen && <EmailBody body={emailBodyData} />}
      </div>
    </>
  );
}

export default App;
