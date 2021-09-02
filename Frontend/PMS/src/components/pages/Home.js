import React, { useState } from "react";

//Components

//Hooks

const Home = () => {
  //useState to store the initial fetch for all bookings.
  const [state, setState] = useState();
  //loading is for
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return <div>Home Page</div>;
};

export default Home;
