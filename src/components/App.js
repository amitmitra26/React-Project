import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCreater from './EventCreater'
import ViewCalander from './ViewCalender'

//var events = { title: ["Ammit","mitra"] };
//var dateEvent = {};
var dateEvents = [];
var year, day, month;
for(year=2017; year<=2018; year++)
{
  for(month=1; month<=12; month++)
  {
    for(day=1; day<=30; day++)
    {

      var dateEvent = {
        id: day + "" + month + "" + year,
        value: day,
        listEvent: []
      };
      //dateEvent.value = day;
      //dateEvent.list = [{timestamp: "", title: ""}];
      dateEvents.push(dateEvent);
    }
  }
}

var arr = [];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {evtitle: [], dateElements: dateEvents};
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }
  onChangeTitle(newTitle){
  //  len = this.state.title.length + 1;
    //arr.push(this.state.title);
    arr.push(newTitle);
    this.setState({evtitle: arr});
    var eventId = newTitle.date + "" + newTitle.month + "" + newTitle.year;
    //console.log(newTitle);
    var clonedateElements = this.state.dateElements;
    clonedateElements.forEach(function(ev){
      if(ev.id == eventId)
      {
        var temp_obj ={
          temp_title : newTitle.title,
          temp_time : newTitle.hours + "" + newTitle.time + "",
          temp_desc : newTitle.description,
          temp_loc : newTitle.location
        };
        console.log(temp_obj);
        ev.listEvent.push(temp_obj);

      }
    });
    this.setState({dateElements: clonedateElements});
    //console.log(this.state.evtitle);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <EventCreater events={this.state} titlechange={this.onChangeTitle.bind(this)} />
        </div>
        <div className="App-intro">
        <div>
        Events:
        <ViewCalander events={this.state.evtitle} dateElements={this.state.dateElements}/>
        </div>
        </div>

      </div>
    );
  }
}

export default App;
