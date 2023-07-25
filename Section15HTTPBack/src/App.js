import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttps from "./components/hooks/https-hook";

function App() {
  console.log("Started the Application");
  const [tasks, setTasks] = useState([]);
  async function tasksLoading(taskobj) {
    const loadedTasks = [];
    console.log("Entering into loading task method");
    for (const taskKey in taskobj) {
      loadedTasks.push({ id: taskKey, text: taskobj[taskKey].text });
    }
    setTasks(loadedTasks);
  }
  let { isLoading, error, sendRequest: fetchTasks } = useHttps();
  console.log("Isloading:" + isLoading);
  console.log("ISError:" + error);
  console.log("SendRequest:" + fetchTasks);

  useEffect(() => {
    console.log("Satrted Running the useEffect ");
    fetchTasks(
      {
        url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/tasks.json",
      },
      tasksLoading
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  console.log("Entering into the line 39 with handleing task handler");

  console.log(
    "Before Sneding the returning th data we are validating what is data it entering "
  );
  console.log("taskAddHandler" + taskAddHandler);
  console.log("tasks:" + tasks);
  console.log("isloading:" + isLoading);
  console.log("Error" + error);
  console.log("fetchtaks:" + fetchTasks);
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
