import { useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Wrapper = () => {
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
  const [empty, setState] = useState(savedTasks == [] ? true : false);
  const [del, setDel] = useState([]);
  return (
    <div>
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
      <div className="container">
        {!empty && (
          <ul>
            {savedTasks.map((task) => (
              <li id={task.name + "id"}>
                <div className="content">
                  {" "}
                  {task.status == "completed" ? (
                    <input type="checkbox" defaultChecked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  <span>{task.name}</span>
                </div>
                <TbTrashX
                  className="trash"
                  id={task.name}
                  onClick={(e) => {
                    document.getElementById(
                      e.currentTarget.id + "id"
                    ).style.display = "none";
                    for (let x in savedTasks) {
                      if (savedTasks[x].name == e.currentTarget.id) {
                        savedTasks.splice(x, 1);
                        console.log(savedTasks);
                        setSavedTasks([...savedTasks]);
                        localStorage.setItem(
                          "tasks",
                          JSON.stringify(savedTasks)
                        );
                        location.href = "/";
                      } else {
                        console.log("not matching");
                      }
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        )}
        <center>
          <button id="new">
            <Link to={"/new"}>
              <IoAddCircleSharp />
            </Link>
          </button>
        </center>
      </div>
    </div>
  );
};

export default Wrapper;
