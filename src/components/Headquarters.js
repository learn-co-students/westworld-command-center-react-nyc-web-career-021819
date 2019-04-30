import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import LogPanel from './LogPanel';
import ColdStorage from './ColdStorage';


class Headquarters extends Component {

  render() {
    return (
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage
            hosts={this.props.hosts}
            onClick={this.props.onClick}
            selectedHost={this.props.selectedHost} />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            selectedHost={this.props.selectedHost}
            toggle={this.props.toggle}
            handleChange={this.props.handleChange} />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel clickAll={this.props.clickAll} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
