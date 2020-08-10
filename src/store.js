import { createStore } from "redux";

const initialState = { students: [] };

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      let newStudents = action.students.map((element) => {
        return { ...element, tags: [] };
      });
      return { ...state, students: newStudents };
    case "ADD_TAG":
      let found = state.students.find(
        (e) => (e.firstName = action.currentStudent)
      );
      const currentTags = [...found.tags, action.addedTag];
      const tagStudentsUpdated = state.students.map((e) => {
        if (e.firstName === action.currentStudent) {
          e.tags = currentTags;
        }
        return e;
      });
      return {
        ...state,
        students: tagStudentsUpdated,
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
