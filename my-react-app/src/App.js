<<<<<<< HEAD
import React from 'react';

// The list data array (keep this at the top)
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// 1. Extracted Search Component
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
=======

import React from 'react';

// Data array (outside component)
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// Main component
function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      
      <hr />
      
      {/* List with all properties */}
      <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> | Author: {item.author}</span>
            <span> | Comments: {item.num_comments}</span>
            <span> | Points: {item.points}</span>
          </li>
        ))}
      </ul>
>>>>>>> 74ad6d4c5f211ebe6242352826db943cecbbadc5
    </div>
  );
}

<<<<<<< HEAD
// 2. Extracted List Component
function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> | Author: {item.author}</span>
          <span> | Comments: {item.num_comments}</span>
          <span> | Points: {item.points}</span>
        </li>
      ))}
    </ul>
  );
}

// 3. Refactored App Component
function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search /> {/* Instantiated Search component */}
      <hr />
      <List />   {/* Instantiated List component */}
    </div>
  );
}

export default App;
=======
export default App;
>>>>>>> 74ad6d4c5f211ebe6242352826db943cecbbadc5
