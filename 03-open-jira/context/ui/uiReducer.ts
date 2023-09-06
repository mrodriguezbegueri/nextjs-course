import { UIState } from ".";

type UIActionType =
  | { type: "[UI]- Open Side Bar" }
  | { type: "[UI]- Close Side Bar" }
  | { type: "[UI]- Set isAdding Entry", payload: boolean }
  | { type: "[UI]- Start Dragging"}
  | { type: "[UI]- End Dragging"}

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI]- Open Side Bar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "[UI]- Close Side Bar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "[UI]- Set isAdding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "[UI]- Start Dragging":
      return {
        ...state,
        isDragging: true
      };
    case "[UI]- End Dragging":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
