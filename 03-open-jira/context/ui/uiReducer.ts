import { UIState } from ".";

type UIActionType = { type: "[UI]- Open Side Bar" } | { type: "[UI]- Close Side Bar" };

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

    default:
      return state;
  }
};
