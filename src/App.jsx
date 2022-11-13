import { useEffect, useState } from "react";
import "./App.css";
import EmailBody from "./EmailBody";
import EmailList from "./EmailList";

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
    // setIsEmailOpen(false);
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
    console.log("clicked id:", id, emailData);
    // setIsEmailOpen(true);
    fetchEmailBody(id, emailData);
  }

  function markAsFavorite(id) {
    console.log("favourite marked, ", id);
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

  function filterUnreadList() {
    // const emailData = [...emailListData];
    const unreadEmails = emailDataSource.filter((item) => !item.read);
    setEmailListData(unreadEmails);
    setIsEmailOpen(false);
    setFilterTab("unread");
  }

  function filterReadList() {
    // const emailData = [...emailListData];
    const readEmails = emailDataSource.filter((item) => item.read);
    setEmailListData(readEmails);
    setIsEmailOpen(false);
    setFilterTab("read");
  }

  function filterFavoriteList() {
    // const emailData = [...emailListData];
    const favouriteEmails = emailDataSource.filter((item) => item.favorite);
    setEmailListData(favouriteEmails);
    setIsEmailOpen(false);
    setFilterTab("favorites");
  }

  return (
    <>
      <nav className="filter-nav">
        <ul>
          Filter By:
          <li
            className={filterTab === "all" ? "active" : ""}
            onClick={() => {
              setEmailListData(emailDataSource);
              setFilterTab("all");
            }}>
            All Emails
          </li>
          <li
            className={filterTab === "unread" ? "active" : ""}
            onClick={filterUnreadList}>
            Unread
          </li>
          <li
            className={filterTab === "read" ? "active" : ""}
            onClick={filterReadList}>
            Read
          </li>
          <li
            className={filterTab === "favorites" ? "active" : ""}
            onClick={filterFavoriteList}>
            Favorites
          </li>
        </ul>
      </nav>
      <div className="App">
        <EmailList
          emailListData={emailListData}
          handleOpenEmail={handleOpenEmail}
        />
        {isEmailOpen && (
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
