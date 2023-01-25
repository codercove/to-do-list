import { useState } from "react";

function App() {
  const itemsDef = JSON.parse(localStorage.getItem("tasks")) || [];
  const [items, setItem] = useState(itemsDef);
  const [addItem, setAddItem] = useState("");
  return (
    <>
      <ul>
        {items.map((item) => (
          <li>
            <h3>{item.work}</h3>
            <span>{item.status}</span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => {
          setAddItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          items.push({
            work: addItem,
            status: "not-completed",
          });
          setItem([...items]);
          localStorage.setItem("tasks", JSON.stringify(items));
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;
