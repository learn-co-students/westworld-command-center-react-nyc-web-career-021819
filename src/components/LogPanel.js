import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

class LogPanel extends Component {

  state = {
    clicked: false
  }

  dummyLogs = () => {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = []

    logs.unshift(Log.warn("This is an example of a warn log"))
    logs.unshift(Log.notify("This is an example of a notify log"))
    logs.unshift(Log.error("This is an example of an error log"))

    return logs
  }

  changeColor = (e) => {
    e.preventDefault()
    const status = this.state.clicked
    this.setState({ clicked: !status }, this.props.clickAll(status))

  }




  render() {
    return (
      <Segment className="HQComps" id="logPanel">
        <pre>
          {this.dummyLogs().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
        </pre>
        <Button
          onClick={this.changeColor}
          fluid
          color={this.state.clicked ? "green" : "red"}
          content={this.state.clicked ? "DEACTIVATE ALL" : "ACTIVATE ALL"}
        />
      </Segment>
    )
  }
}

export default LogPanel