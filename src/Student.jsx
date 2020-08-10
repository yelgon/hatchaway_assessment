import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post.jsx";

function Student() {
  const [query, setQuery] = useState("");
  const [tagQuery, setTagQuery] = useState("");
  const students = useSelector((st) => st.students);

  let visibleStudents = [];
  if (!query) {
    visibleStudents = students;
  } else {
    visibleStudents = students.filter((student) => {
      return (
        student.firstName.toLowerCase().includes(query) ||
        student.lastName.toLowerCase().includes(query)
      );
    });
  }

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  const handleQueryTag = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {" "}
      <input
        id="name-input"
        type="text"
        placeholder="Search by name"
        onChange={handleQuery}
      ></input>
      <form onSubmit={handleQueryTag}>
        <input
          id="tag-input"
          type="text"
          placeholder="Search by tags"
          onChange={(e) => setTagQuery(e.target.value)}
        ></input>
      </form>
      <div>
        {visibleStudents.map((element, idx) => {
          return <Post student={element} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Student;
