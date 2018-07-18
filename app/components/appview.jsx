var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.jsx");

class DataForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    if (this.refs.dataInput.value !== "") {
      var itemText = this.refs.dataInput.value;
      this.refs.dataInput.value ="";
      return this.props.addData(itemText);
    }
  }
  render() {
    return <div>
            <input className="dataInput" ref="dataInput" />
            <button className="add" onClick = {this.onClick.bind(this)}>Add</button>
        </div>
  }
};

class DataItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return <div>
                <p>
                    <b>{this.props.text}</b><br />
                    <button className="delete" onClick={() => this.props.deleteData(this.props.text)}>Delete</button>
                </p>
            </div>
  }
};

class DatasList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
        {this.props.datas.map(item =>
          <DataItem key={item}
                    text={item}
                    deleteData={this.props.deleteData}/>
        )}
      </div>
  }
};

class AppView extends React.Component {

    render() {
        return <div>
            <DataForm addData={this.props.addData}/>
            <DatasList {...this.props} />
    </div>
  }
};

function mapStateToProps(state) {
  return {
    datas: state.get("datas")
  };
}

module.exports = connect(mapStateToProps, actions)(AppView);
