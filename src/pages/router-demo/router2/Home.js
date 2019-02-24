import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
  render() {
    return <div>
      home
       <ul>
          <li>
            <Link to="/main">main</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/topics">topics</Link>
          </li>
        </ul>
        <hr/>
      {this.props.children}
    </div>
  }
}