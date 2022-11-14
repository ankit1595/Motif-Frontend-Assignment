import { useEffect, useState } from "react";
import "./App.css";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";

function App() {
  const [emailDataSource, setEmailDataSource] = useState([]);
  const [emailListData, setEmailListData] = useState([]);
  const [emailBodyData, setEmailBodyData] = useState("");
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [filterTab, setFilterTab] = useState("all");

  useEffect(() => {
    fetchEmailList();
  }, []);

  function fetchEmailList() {
    fetch("https://6366339879b0914b75cba9c2.mockapi.io/api/email")
      .then((response) => response.json())
      .then((data) => {
        setEmailListData(
          data.map((item) => ({ ...item, read: false, favorite: false }))
        );
        setEmailDataSource(
          data.map((item) => ({ ...item, read: false, favorite: false }))
        );
      })
      .catch((err) => console.error(err));
  }

  function fetchEmailBody(id, emailData) {
    fetch(`https://6366339879b0914b75cba9c2.mockapi.io/api/email/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmailBodyData({ ...data, ...emailData });
        setIsEmailOpen(true);
        setEmailListData((prevState) =>
          prevState.map((item) => {
            if (item.id === id) {
              return { ...item, read: true };
            }
            return item;
          })
        );
        setEmailDataSource((prevState) =>
          prevState.map((item) => {
            if (item.id === id) {
              return { ...item, read: true };
            }
            return item;
          })
        );
      })
      .catch((err) => console.error(err));
  }

  function handleOpenEmail(id, emailData) {
    fetchEmailBody(id, emailData);
  }

  function markAsFavorite(id) {
    setEmailListData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );
    setEmailDataSource((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );

    setEmailBodyData((prevState) => ({
      ...prevState,
      favorite: !prevState.favorite,
    }));
  }

  function filterEmails(type) {
    let emailList = emailDataSource;
    if (type === "unread") {
      emailList = emailDataSource.filter((item) => !item.read);
    } else if (type === "read") {
      emailList = emailDataSource.filter((item) => item.read);
    } else if (type === "favorites") {
      emailList = emailDataSource.filter((item) => item.favorite);
    } else {
      emailList = emailDataSource;
    }
    setFilterTab(type);
    setEmailListData(emailList);
    setIsEmailOpen(false);
  }

  function getDate() {
    let date = new Date();
    const day = date.toLocaleDateString().split("/")[1];
    const mmyyyy = date.toLocaleDateString("en-US", {
      month: "numeric",
      year: "numeric",
    });
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const dateFormat = day + "/" + mmyyyy + " " + time;
    return dateFormat;
  }

  return (
    <>
      <nav className="filter-nav">
        <ul>
          Filter By:
          <li
            className={filterTab === "all" ? "active" : ""}
            onClick={() => filterEmails("all")}>
            All Emails
          </li>
          <li
            className={filterTab === "unread" ? "active" : ""}
            onClick={() => filterEmails("unread")}>
            Unread
          </li>
          <li
            className={filterTab === "read" ? "active" : ""}
            onClick={() => filterEmails("read")}>
            Read
          </li>
          <li
            className={filterTab === "favorites" ? "active" : ""}
            onClick={() => filterEmails("favorites")}>
            Favorites
          </li>
        </ul>
      </nav>
      <div className="App">
        <EmailList
          emailListData={emailListData}
          handleOpenEmail={handleOpenEmail}
          date={getDate()}
        />
        {isEmailOpen && (
          <EmailBody
            emailData={emailBodyData}
            markAsFavorite={markAsFavorite}
            date={getDate()}
          />
        )}
      </div>
    </>
  );
}

export default App;
