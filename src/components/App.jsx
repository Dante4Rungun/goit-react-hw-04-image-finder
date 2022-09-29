import { ImageFinder } from "./ImageFinder/ImageFinder";
import { Component } from "react";
import { FirstQueryProvider } from "context/firstQueryContext";

export class App extends Component  {
  render() {
    return (<div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FirstQueryProvider>
        <ImageFinder />
      </FirstQueryProvider>
    </div>
  )}
};
