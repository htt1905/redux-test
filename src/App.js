import React, { Component } from 'react';
import './App.css';
import ComponentSon from './components/ComponentSon';
import {connect} from 'react-redux';
class App extends Component {
  renderMember = (members) =>{
    var result = null;
        if(members.length > 0){
            result = members.map((member,key)=>{
                return(
                    <tr key={key}>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                        <td>{member.description}</td>
                    </tr>
                );
            })
        }
        return result;
  }
  render(){
    var {value} = this.props
    return (
      <div className="App">
        <h1>{value}</h1>
        <ComponentSon/>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Description</th>
          </tr>
          {this.renderMember(this.props.members)}
        </table>

      </div>
    );
  }
}
const mapDispatchToProps = null;
const mapStateToProps = (state, ownProps) => {
  return {
    value: state.testRedux.value,
    members: state.testRedux.members
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
