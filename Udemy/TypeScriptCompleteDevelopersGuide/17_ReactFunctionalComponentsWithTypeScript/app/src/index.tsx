import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

interface AppProps {
  color?: string;
}

// interface AppState {
//   counter: number;
// }

class App extends React.Component<AppProps> {
  // You can create constructor like this, but you need create interface like AppState above this, to pass as second
  // generic type in component to avoid error when React pass ReadOnly generic instead.
  // constructor(props: AppProps) {
  //   super(props);
  //
  //   this.state = { counter: 0 }
  // }

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
