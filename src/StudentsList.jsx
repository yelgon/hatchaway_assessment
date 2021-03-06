import React, { useState } from "react";
import { useSelector } from "react-redux";
import Student from "./Student.jsx";

function StudentsList() {
  const [query, setQuery] = useState("");
  const [tagQuery, setTagQuery] = useState("");
  const [tagQuerySubmit, setTagQuerySubmit] = useState("");
  const students = useSelector((st) => st.students);

  let visibleStudents = [];
  if (query) {
    visibleStudents = students.filter((student) => {
      return (
        student.firstName.toLowerCase().includes(query) ||
        student.lastName.toLowerCase().includes(query)
      );
    });
  } else if (tagQuerySubmit) {
    visibleStudents = students.filter((student) => {
      return student.tags.find((e) => e === tagQuerySubmit);
    });
  } else {
    visibleStudents = students;
  }

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  const handleQueryTag = (event) => {
    event.preventDefault();
    setTagQuerySubmit(tagQuery);
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
          return <Student student={element} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default StudentsList;
