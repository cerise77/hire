var addData = function (data) {
  return {
    type: "ADD_DATA",
    data
  }
};
var deleteData = function (data) {
  return {
    type: "DELETE_DATA",
    data
  }
};

module.exports = {addData, deleteData};
