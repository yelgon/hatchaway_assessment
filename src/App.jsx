import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import StudentsList from "./StudentsList.jsx";

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

  return <StudentsList />;
}

export default App;
