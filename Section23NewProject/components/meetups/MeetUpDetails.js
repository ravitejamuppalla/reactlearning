import classes from "./MeetUpDetails.module.css";

function MeetUpDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt="Image 1"></img>
      <h1> {props.title}</h1>
      <address>{props.address}</address>
    </section>
  );
}

export default MeetUpDetails;
