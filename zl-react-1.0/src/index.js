//import the react & react-Dom package
import React from 'react';
import ReactDOM from 'react-dom';



//JSX element, header
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>zlrkw11</p>
    <small>Dec 17, 2023</small>
  </header>
)

//JSX element main
const main = (
  <main>
    <p>Prerequisie to get started react.js</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

// JSX element, app, a container / parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement);
