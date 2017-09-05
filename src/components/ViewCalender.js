import React, { Component } from 'react';

var mnths = [];
var yrs = [];
for(var m=1; m<=12; m++)
{
  mnths.push(<option>{((m+100).toString()).substr(1)}</option>);
}
for(var j=2017; j<=2018 ; j++)
{
  yrs.push(<option>{j}</option>);
}

export class ViewCalander extends React.Component{
  constructor(props){
    super(props);
    this.state = { month: "01", year: "2017" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value});
    console.log(this.state.month);
  }

  render(){

  return(
    <div>
    <select  name="month" value={this.state.month} onChange={this.handleChange.bind(this)}>
      {mnths}
    </select>
    <select name="year" value={this.state.year} onChange={this.handleChange.bind(this)}>
      {yrs}
    </select>
    <ul>{this.props.events.map((str,i) => <li key={i}>{str.title}</li>)}</ul>
    <ul>

       {this.props.dateElements.map((ev,index)=>((ev.id.substr(2,2) == this.state.month) && (ev.id.substr(4) == this.state.year))?<li key={index}>{ev.id}----{ev.value}----<ul>{ev.listEvent.map((ls,ind)=><li key={ind}>{ls.temp_title}---{ls.temp_time}</li>)}</ul></li>:null)}
    </ul>
    </div>
  );
 }




}


export default ViewCalander;
