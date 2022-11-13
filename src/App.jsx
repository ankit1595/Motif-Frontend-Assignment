import "./App.css";
import EmailBody from "./EmailBody";
import EmailList from "./EmailList";

function App() {
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
        <EmailList />
        <EmailBody />
      </div>
    </>
  );
}

export default App;
