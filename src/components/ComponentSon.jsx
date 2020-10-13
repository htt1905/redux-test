import React, { Component } from 'react';

import ComponentGrandChildren from './ComponentGrandChildren';

class ComponentSon extends Component {
  render(){
    return (
        <ComponentGrandChildren/>  
    );
  }
}

export default ComponentSon;
