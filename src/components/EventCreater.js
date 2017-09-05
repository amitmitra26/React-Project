import React, { Component } from 'react';

var dates = [];
var time = [];
var hours = [];
var years = [];
var months = [];
for(var i=0; i<30 ; i++)
{
  dates.push(<option>{i + 1}</option>);
}
for(var l=0;l<60; l++)
{
  time.push(<option>{l}</option>);
}
for(var k=0; k<24; k++)
{
  hours.push(<option>{k}</option>);
}
for(var j=2017; j<=2018 ; j++)
{
  years.push(<option>{j}</option>);
}
for(var m=1; m<=12; m++)
{
  months.push(<option>{m}</option>);
}


class EventCreater extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {title: 'None',date: "1",year: "2017",description:"Nothing",month:"1",location:"",hours:"1",time:"0"};
    this.changeState = this.changeState.bind(this)
    this.submitEvent = this.submitEvent.bind(this)

  }
  changeState(event){
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value});
  }
  submitEvent(event){

    var obj = {
                  title:this.state.title,
                  date:this.state.date,
                  year:this.state.year,
                  month:this.state.month,
                  description:this.description,
                  location:this.state.location,
                  hours:this.state.hours,
                  time:this.state.time
                };
      this.props.titlechange(obj);

      //this.props.events.title.push(obj.title);
      //console.log(this.props.events.title);
    event.preventDefault();

  }
  render(){
    return(
      <form onSubmit={this.submitEvent.bind(this)}>
      Event:
      <input type="text" name="title" onChange={this.changeState.bind(this)} />
      <br />
   Description:
   <input type="text" name="description"  onChange={this.changeState.bind(this)}/>
   <br />
   Location:
   <input type="text" name="location" onChange={this.changeState.bind(this)}/>
   <br />
     <label>
       Pick your Date:
       <select name="date" value={this.state.date} onChange={this.changeState.bind(this)}>
         {dates}
       </select>

       <select  name="month" value={this.state.month} onChange={this.changeState.bind(this)}>
         {months}
       </select>
       <select name="year" value={this.state.year} onChange={this.changeState.bind(this)}>
         {years}
       </select>
     </label>
     <label>
       Pick your Time:
       <select name="hours" value={this.state.hours} onChange={this.changeState.bind(this)}>
         {hours}
       </select>
       <select name="time" value={this.state.time} onChange={this.changeState.bind(this)}>
         {time}
       </select>
     </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EventCreater;
