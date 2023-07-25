import { useState } from "react";
import useFetchHttp from "../../hooks/use-fetchHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendingPostRequest } = useFetchHttp();

  const enterTaskHandler = async (taskText) => {
    const addingUpData = (DataFromOut) => {
      const generatedId = DataFromOut.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };
    sendingPostRequest(
      {
        url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: taskText,
        headers: {
          "Content-Type": "application/json",
        },
      },
      addingUpData
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
