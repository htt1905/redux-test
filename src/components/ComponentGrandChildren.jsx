import React, { Component } from 'react';
import {connect} from 'react-redux'
import {actChangeValue,actSubmitValue} from './../actions/index'
class ComponentGrandChildren extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            age:'',
            gender:''
        }
    }
    changeValue = (e) =>{
        this.props.changeValue(e.target.value)
    }
    handleChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit = () =>{
        this.props.submitValue(this.state);
        this.setState({
            name:'',
            age:'',
            gender:''
        })
    }
    render(){
        var {value} = this.props;
        var {name,age,description} = this.state;
        return (
            <div className="App">
                <label for="fname">Name:</label><br></br>
                <input type="text" name="name" value={name || ''} onChange={(event)=> this.handleChange(event)}></input><br></br>
                <label for="fname">Age:</label><br></br>
                <input type="number" name="age" value={age || ''} onChange={(event)=> this.handleChange(event)}></input><br></br>
                <label for="fname">Description:</label><br></br>
                <input type="text" name="description"  value={description || ''} onChange={(event)=> this.handleChange(event)}></input>
                <br></br>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeValue: (value) => {
            dispatch(actChangeValue(value))
        },
        submitValue: (value) => {
            dispatch(actSubmitValue(value))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.testRedux.value
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ComponentGrandChildren);
