import Home from "../components/Home";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

function App() {
  const { getBountys } = useApi();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log(await getBountys());
  }
  return <Home />;
}

export default App;
