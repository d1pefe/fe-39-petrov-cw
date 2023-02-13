import React from 'react';
import logo from './logo.svg';
import './App.scss';

const Title = (props: any) => {
    return <div>{props.text}</div>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
          flexDirection: "column",
          flex: 1,
          backgroundColor: "red",
      }}>
        <img src={logo} className="App-logo" alt="logo" />
        <Title text={`Edit src/App.tsx and save to reload.`} />
      </header>
    </div>
  );
}

export default App;
