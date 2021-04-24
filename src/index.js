import React from 'react';
import ReactDOM from 'react-dom';

function WelcomeF(props) {
  return <h1>Helló, {props.name}</h1>;
}

class WelcomeC extends React.Component {
  render() {
    return <h1>Helló, {this.props.name}</h1>;
  }
}

const element =
  <div>
      <WelcomeF name="Függvény" />
      <WelcomeC name="Osztály" />
      <WelcomeC name="Osztály2" />
      <WelcomeF name="Függvény2" />
  </div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);