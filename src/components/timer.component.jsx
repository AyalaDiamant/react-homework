import { useState, useEffect } from "react";


export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h2>You opened the site {count} seconds ago!</h2>;
}

