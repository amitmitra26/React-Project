import React from 'react';
import './App.css';
import EventCreater from './EventCreater'
import ViewCalander from './ViewCalender'


var dateEvents = [];
var year, day, month;
for(year=2017; year<=2018; year++)
{
  for(month=1; month<=12; month++)
  {
    for(day=1; day<=30; day++)
    {

      var dateEvent = {
        id: ((day+100).toString()).substr(1) + "" + ((month+100).toString()).substr(1) + "" + year,
        value: ((day+100).toString()).substr(1),
        listEvent: []
      };
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
    arr.push(newTitle);
    this.setState({evtitle: arr});
    var eventId = newTitle.date + "" + newTitle.month + "" + newTitle.year;
    var clonedateElements = this.state.dateElements;
    clonedateElements.forEach(function(ev){
      if(ev.id === eventId)
      {
        var temp_obj = {
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
  }

  render() {
    return (
      <div className="App row">
        <div className="App-header col-sm-4">
          <EventCreater events={this.state} titlechange={this.onChangeTitle.bind(this)} />
        </div>
        <div className="App-intro col-sm-8">
          <div>
            <ViewCalander events={this.state.evtitle} dateElements={this.state.dateElements}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
