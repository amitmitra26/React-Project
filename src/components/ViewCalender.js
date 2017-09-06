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
    this.state = { month: "01", year: "2017",title: "", description: "", location:"", timestamp:"", datestamp:"" };
    this.handleChange = this.handleChange.bind(this);
    this.showEvent = this.showEvent.bind(this);
  }
  handleChange(event){
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value});
    console.log(this.state.month);
  }
  showEvent(ev,details)
  {
    this.setState({title: details.title});
    this.state({description: details.description});
    this.setState({location: details.location});
    this.setState({timestamp: details.timestamp});
    this.setState({datestamp: ev.id});
  }

  render(){

  return(
    <div>

      Month:<select  name="month" value={this.state.month} onChange={this.handleChange.bind(this)}>
              {mnths}
            </select>
      Year:<select name="year" value={this.state.year} onChange={this.handleChange.bind(this)}>
             {yrs}
           </select>
      <br /><br /><br />
      <div>
        {this.props.dateElements.map((ev,index)=>((ev.id.substr(2,2) == this.state.month) && (ev.id.substr(4) == this.state.year))?<span key={index}>{ev.value}<ul>{ev.listEvent.map((ls,ind)=><li key={ind}>{ls.temp_title}---{ls.temp_time}</li>)}</ul></span>:null)}
      </div>
      <div className="view-event">
        <p>Event Title:{this.state.title}</p>
        <p>Event Description:{this.state.description}</p>
        <p>Event Location:{this.state.location}</p>
        <p>Event Date:{this.state.datestamp.substr(0,2)+"/"+this.state.datestamp.substr(2,2)+"/"+this.state.datestamp.substr(4)}</p>
        <p>Event Time:{this.state.timestamp.substr(0,2)+":"+this.state.timestamp.substr(2)}</p>
      </div>
    </div>
  );
 }

}


export default ViewCalander;
