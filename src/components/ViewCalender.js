import React, { Component } from 'react';

export class ViewCalander extends React.Component{

  render(){

  return(
    <div>
    <ul>{this.props.events.map((str,i) => <li key={i}>{str.title}</li>)}</ul>
    <ul>
      {this.props.dateElements.map((ev,index)=><li key={index}>{ev.id}----{ev.value}----<ul>{ev.listEvent.map((ls,ind)=><li key={ind}>{ls.temp_title}---{ls.temp_time}</li>)}</ul></li>)}
    </ul>
    </div>
  );
 }




}


export default ViewCalander;
