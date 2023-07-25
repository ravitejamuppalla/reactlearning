import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetchHttp from "./hooks/use-fetchHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  let { isLoading, error, sendRequest: fetchTasks } = useFetchHttp();
  useEffect(() => {
    function taskKeyLoader(taskLoader) {
      const loadedTasks = [];
      for (const taskKey in taskLoader) {
        loadedTasks.push({ id: taskKey, text: taskLoader[taskKey].text });
      }
      setTasks(loadedTasks);
    }

    fetchTasks(
      {
        url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/tasks.json",
      },
      taskKeyLoader
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

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
