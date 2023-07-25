import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetsUp() {
  function newMeetupData(fullData) {
    console.log(fullData);
  }

  return <NewMeetupForm onAddMeetup={newMeetupData}></NewMeetupForm>;
}

export default NewMeetsUp;
