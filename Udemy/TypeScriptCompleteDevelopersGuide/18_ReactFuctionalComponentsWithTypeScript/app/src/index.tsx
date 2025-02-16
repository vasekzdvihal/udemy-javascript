import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import UserSearchWithRef from "./refs/UserSearchWithRef";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
        <Parent />
        <hr/>
        <GuestList />
        <hr/>
        <UserSearch />
        <hr/>
        <EventComponent />
        <hr/>
        <UserSearchWithRef />
    </div>
  );
};

root.render(<App />);
