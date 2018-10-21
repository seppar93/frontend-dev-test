import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { player1NameChanged, player2NameChanged } from "../actions/players";
import NewGame from "../components/NewGame";

const mapStateToProps = state => ({
  player1Name: state.players.player1Name,
  player2Name: state.players.player2Name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      player1NameChanged,
      player2NameChanged
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGame);
