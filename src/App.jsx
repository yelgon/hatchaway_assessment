import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Student from "./Student.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://www.hatchways.io/api/assessment/students"
      );
      let json = await response.json();
      dispatch({ type: "SET_DATA", students: json.students });
    }
    fetchData();
  }, []);

  return <Student />;
}

export default App;
