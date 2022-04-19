import useFetch from "../hooks/useFetch";
import styles from "../styles/TripList.module.css";

export default function TripList() {
  //   const [url, setUrl] = useState("http://localhost:3000/trips");
  //const [trips, setTrips] = useState([]);
  //let [randomNumber, setRandomNumber] = useState(0);
  const url = "http://localhost:3000/trips";
  const { data, isPendig, error } = useFetch(url);

  //#region another version of fetch

  // with useCallBack we can cache a function, so in every component rerun we are not going to create a new referenced function
  // and, in consequence, we are not executing useEffect when we dont want it
  //   const fetchTrips = useCallback(async () => {
  //     const response = await fetch("http://localhost:3000/trips");
  //     const json = await response.json();
  //     setTrips(json);
  //   }, []);

  //   useEffect(() => {
  //     fetchTrips();
  //   }, [randomNumber, fetchTrips]);
  // the second argument is called dependencies array
  // we use it to specify arguments to control if this function (useEffect) should be executed more than one time
  // what can we do to re-triggerr useEffect method? -> we can change the  randonNumber value on runtime

  // we can't work using this method bc we are going to create a loop
  //   fetch("http://localhost:3000/trips").then((response) => {
  //     response.json().then((json) => {
  //       console.info(json);
  //       setTrips(json);
  //     });

  // we need to use useEffect hook on this scenario, to prevent the component to re-run themself starting a loop

  //#endregion
  return (
    <div className={styles.tripList}>
      <h2>Trip list</h2>

      {!isPendig && (
        <ul>
          {data &&
            data.map((trip) => {
              return (
                <li key={trip.id}>
                  <h3> {trip.title} </h3>
                  <p>{trip.price}</p>
                </li>
              );
            })}
        </ul>
      )}

      {isPendig && <span>cargando.. </span>}
      {error && <span>{error}</span>}
    </div>
  );
}
