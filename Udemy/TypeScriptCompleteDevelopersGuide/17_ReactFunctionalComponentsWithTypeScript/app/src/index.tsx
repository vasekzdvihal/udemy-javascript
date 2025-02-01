import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

interface AppProps {
  color?: string;
}

// Functional Component
// const App = (props: AppProps): JSX.Element => {
//   return <div>{ props.color }</div>
// };

class App extends React.Component<AppProps> {
  state = { counter: 0 }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}

root.render(<App color="red" />);
