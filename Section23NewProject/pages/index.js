import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg",
    title: "A Taj Mahal",
    address: "Agra Delhi",
  },
  {
    id: "m2",
    image:
      "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-kapaleeshwarar-temple.jpg",
    title: "A Kapaleeshwarar Temple",
    address: "Paris sreet 1234",
  },
  {
    id: "m3",
    image:
      "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-holi-festival-of-colors.jpg",
    title: "A Hoil Festival",
    address: "Paris sreet 1234",
  },
];

function meetups() {
  return <MeetupList meetups={DUMMY_DATA}></MeetupList>;
}
export default meetups;
