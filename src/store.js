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
      return {
        ...state,
        students: state.students.map((e) =>
          e.firstName === action.currentStudent
            ? {
                ...e,
                tags: e.tags.concat(action.addedTag),
              }
            : e
        ),
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
