import React from 'react';

var dates = [];
var time = [];
var hours = [];
var years = [];
var months = [];
for(var i=1; i<=31 ; i++)
{
  dates.push(<option key={i}>{((i+100).toString()).substr(1)}</option>);
}
for(var l=0;l<60; l++)
{
  time.push(<option key={l}>{((l+100).toString()).substr(1)}</option>);
}
for(var k=0; k<24; k++)
{
  hours.push(<option key={k}>{((k+100).toString()).substr(1)}</option>);
}
for(var j=2017; j<=2030 ; j++)
{
  years.push(<option key={j}>{j}</option>);
}
for(var m=1; m<=12; m++)
{
  months.push(<option key={m}>{((m+100).toString()).substr(1)}</option>);
}


class EventCreater extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {title: 'Not Specified',date: "01",year: "2017",description:"Not Specified",month:"01",location:"Not Specified",hours:"00",time:"00"};
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
                  description:this.state.description,
                  location:this.state.location,
                  hours:this.state.hours,
                  time:this.state.time
                };
      this.props.titlechange(obj);

    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.submitEvent.bind(this)}>
        <table>
          <tbody>
          <tr>
            <th>Event:</th><td><input type="text" name="title" onChange={this.changeState.bind(this)} /></td>
          </tr>
          <tr>
            <th>Description:</th><td><input type="text" name="description"  onChange={this.changeState.bind(this)}/></td>
          </tr>
          <tr>
            <th>Location:</th><td><input type="text" name="location" onChange={this.changeState.bind(this)}/></td>
          </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
          <tr>
            <th>Date:</th>
            <td>
              <select name="date" value={this.state.date} onChange={this.changeState.bind(this)}>
                 {dates}
              </select>
            </td>
          <th>Month:</th>
          <td>
            <select  name="month" value={this.state.month} onChange={this.changeState.bind(this)}>
              {months}
            </select>
          </td>
          <th>Year:</th>
          <td>
            <select name="year" value={this.state.year} onChange={this.changeState.bind(this)}>
              {years}
             </select>
          </td>
          </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
          <tr>
          <th>Hours:</th>
          <td><select name="hours" value={this.state.hours} onChange={this.changeState.bind(this)}>
                  {hours}
                </select>
          </td>
          <th>Minutes:</th>
          <td>
            <select name="time" value={this.state.time} onChange={this.changeState.bind(this)}>
              {time}
            </select>
          </td>
          </tr>
          </tbody>
        </table>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EventCreater;
