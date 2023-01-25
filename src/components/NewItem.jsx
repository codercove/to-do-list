import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

const NewItem = () => {
  function returnNum(num) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i in arr) {
      if (arr[i] === parseInt(num)) {
        return (num = "0" + num.toString());
      }
    }
    return num;
  }
  function checkStatus(arr) {
    let n = 0;
    for (let j in arr) {
      if (arr[j].status === "completed") {
        n += 1;
      }
    }
    return n;
  }
  const [savedTasks, setSavedTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [item, setItem] = useState("");
  return (
    <>
      <div id="App">
        <nav>
          <Link to={"/"}>
            <BiArrowBack />
          </Link>
          <h3>Add New Task</h3>
        </nav>
        <div className="stats-section">
          <ul className="created-stats">
            {savedTasks == [] ? "00" : <li>{returnNum(savedTasks.length)}</li>}
            <li>Created tasks</li>
          </ul>
          <ul className="completed-stats">
            {savedTasks == [] ? (
              "00"
            ) : (
              <li>{returnNum(checkStatus(savedTasks))}</li>
            )}
            <li>Completed tasks</li>
          </ul>
        </div>
        <div className="input-container">
          <input
            type="text"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (item === "" || item === undefined) {
                alert("Input cannot be empty");
              } else {
                savedTasks.push({
                  name: item,
                  status: "not-completed",
                });
                setSavedTasks([...savedTasks]);
                localStorage.setItem("tasks", JSON.stringify(savedTasks));
                location.href = "/";
              }
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default NewItem;
