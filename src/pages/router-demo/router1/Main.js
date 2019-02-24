import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{
  render() {
    return (
     <div>
       Main
        <br />
       <Link to="/main/12">12</Link>
       <br/>
       <Link to="/main/45">34</Link>
        <br />
       {this.props.children}
     </div>
    );
  }
}