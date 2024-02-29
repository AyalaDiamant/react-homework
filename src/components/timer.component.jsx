import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h2>You opened the site {count} seconds ago!</h2>;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);