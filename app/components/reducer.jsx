var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
    case "ADD_DATA":
        return state.update("datas", (datas) => datas.push(action.data));
    case "DELETE_DATA":
        return state.update("datas",
            (datas) => datas.filterNot(
                (item) => item === action.data
            )
        );
  }
  return state;
}
module.exports = reducer;
