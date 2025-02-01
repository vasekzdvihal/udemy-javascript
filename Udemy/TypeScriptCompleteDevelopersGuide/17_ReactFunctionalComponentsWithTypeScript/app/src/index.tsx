import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <div>Hi there. Color is {this.props.color}</div>;
  }
}

root.render(<App color="red" />);
