import { connect } from "react-redux";

const resetButton = ({ dispatch }) => {
  return <button label="Rest" onPress={dispatch} />;
};

connect()(resetButton);

export default resetButton;
