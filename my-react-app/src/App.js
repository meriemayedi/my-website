// 1. Import statements (ALWAYS AT THE TOP)
import './App.css';


// 2. Components (before exports)
function Header() {
  return <h2>My Header</h2>;
}

// 3. Main App component
function App() {
  // Variables go here
  const appTitle = "My React App";
  const buttonText = "Click Me";

  // JSX goes in the return statement
  return (
    <div className="app">
      {/* Header component */}
      <Header />
      
      {/* Main content */}
      <h1>Welcome to {appTitle}!</h1>
      
      <button onClick={() => alert("Hello!")}>
        {buttonText}
      </button>
      
      
    </div>
  );
}

// 4. Exports (ALWAYS LAST)
export default App;
