import React, { useState, useEffect } from 'react';
import TheHeader from 'components/TheHeader';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="App">
      <TheHeader />
      <header className="App-header">
        <p>
          Page has been open for <code>{count}</code> seconds. HHH
        </p>
      </header>
    </div>
  );
}

export default App;
