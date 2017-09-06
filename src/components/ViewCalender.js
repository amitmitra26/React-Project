import React from 'react';

var mnths = [];
var yrs = [];
for(var m=1; m<=12; m++)
{
  mnths.push(<option key={m}>{((m+100).toString()).substr(1)}</option>);
}
for(var j=2017; j<=2030 ; j++)
{
  yrs.push(<option key={j}>{j}</option>);
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
  }
  showEvent(ev,details)
  {

    this.setState({title: details.temp_title});
    this.setState({description: details.temp_desc});
    this.setState({location: details.temp_loc});
    this.setState({timestamp: details.temp_time});
    this.setState({datestamp: ev.id});

  }

  render(){

  return(
    <div>

      <div className="row">
      <div className="view-event col-sm-12">
        <table className="table">
        <thead><tr><th className="text-center">Event Details</th></tr></thead>
        <tbody>
          <tr><th>Title:</th><td>{this.state.title}</td></tr>
          <tr><th>Description:</th><td>{this.state.description}</td></tr>
          <tr><th>Location:</th><td>{this.state.location}</td></tr>
          <tr><th>Date:</th><td>{this.state.datestamp.substr(0,2)+"/"+this.state.datestamp.substr(2,2)+"/"+this.state.datestamp.substr(4)}</td></tr>
          <tr><th>Time:</th><td>{this.state.timestamp.substr(0,2)+":"+this.state.timestamp.substr(2)}</td></tr>
        </tbody>
        </table>
        <br />
      </div>

        <div className="col-sm-12">
        <p className="text-center">
            Month:
              <select  name="month" value={this.state.month} onChange={this.handleChange.bind(this)}>
                {mnths}
              </select>
          Year:
              <select name="year" value={this.state.year} onChange={this.handleChange.bind(this)}>
                {yrs}
              </select>
            <br /><br />
        </p>
        </div>
        <div className="col-sm-12">
          {this.props.dateElements.map((ev,index)=>((ev.id.substr(2,2) === this.state.month) && (ev.id.substr(4) === this.state.year))?<span key={index}>{ev.value}<ul>{ev.listEvent.map((ls,ind)=><li key={ind} className="event-title" onClick={this.showEvent.bind(this,ev,ls)}>{ls.temp_title}</li>)}</ul></span>:null)}
        </div>

      </div>
    </div>
  );
 }

}


export default ViewCalander;
