import * as ACTIONS from "../constants";
export default (
  popup = { error: false, message: "", display: false },
  action
) => {
  switch (action.type) {
    case ACTIONS.SUCCESS:
      return { error: false, message: action.payload, display: true };

    case ACTIONS.ERROR:
      return { error: true, message: action.payload, display: true };
    case ACTIONS.CLOSE_DISPLAY:
      return { error: false, message: "", display: false };

    default:
      return popup;
  }
};
