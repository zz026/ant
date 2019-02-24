import React from 'react';

export default class Info extends React.Component{
  componentWillMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return (
     <div>
       Info
        <br/>
       {this.props.match.params.id}
     </div>
    );
  }
}