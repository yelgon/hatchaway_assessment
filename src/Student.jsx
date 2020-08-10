import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const TagBox = styled.div`
  background: gray;
  height: 25px;
  width: 70px;
  margin: 5px 2px 5px 2px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 30px;

  h1 {
    text-transform: uppercase;
  }
  img {
    margin-top: 50px;
    border: 1px solid #c6dcd8;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  div {
    padding: 5px;
  }
`;

function Student(props) {
  const dispatch = useDispatch();
  let student = props.student;
  const [grade, toggleGrade] = useState(true);
  const [tagName, setTagName] = useState("");
  const Average = (student) => {
    let convertInteger = student.map((e) => parseInt(e));
    let average =
      convertInteger.reduce((prev, curr) => prev + curr) / student.length;
    return average;
  };
  const showingGrades = () => {
    toggleGrade(false);
  };
  const showingMinus = () => {
    toggleGrade(true);
  };
  const submitAddTag = (event) => {
    event.preventDefault();
    setTagName("");
    console.log(tagName);
    dispatch({
      type: "ADD_TAG",
      currentStudent: student.firstName,
      addedTag: tagName,
    });
  };

  return (
    <div>
      <Wrapper>
        <img src={student.pic} />
        <div>
          <h1>
            {student.firstName} {student.lastName}
          </h1>
          <div>Email: {student.email}</div>
          <div>Company: {student.company}</div>
          <div>Skill: {student.skill}</div>
          <div>Average: {Average(student.grades)}%</div>
          <div>
            {!grade &&
              student.grades.map((grade, idx) => {
                return (
                  <div key={idx}>
                    test{idx + 1}: {parseInt(grade)}
                  </div>
                );
              })}{" "}
          </div>
          <div style={{ display: "flex" }}>
            {!grade &&
              student.tags.map((e, idx) => {
                return <TagBox key={idx}>{e}</TagBox>;
              })}
          </div>
          <div>
            {!grade && (
              <form onSubmit={submitAddTag}>
                <input
                  onChange={(e) => setTagName(e.target.value)}
                  className="add-tag-input"
                  placeholder="Add a tag"
                  value={tagName}
                ></input>
              </form>
            )}
          </div>
        </div>
        <div style={{ position: "absolute", right: "50px" }}>
          {grade && (
            <button className="expand-btn" onClick={showingGrades}>
              +
            </button>
          )}
          {!grade && (
            <button className="expand-btn" onClick={showingMinus}>
              -
            </button>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
export default Student;
