import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import Area from './Area'

class WestworldMap extends Component {

  render() {
    const areas = this.props.areas
    const hosts = this.props.hosts

    return (
      <Segment id="map" >
        {areas.map(area => {
          const areaHosts = hosts.filter(host => host.area === area.name)
          return <Area
            name={area.name}
            key={area.id}
            limit={area.limit}
            auth_req={area.auth_req}
            id={area.id}
            hosts={areaHosts}
            onClick={this.props.onClick}
            selectedHost={this.props.selectedHost} />
        })}
      </Segment>
    )
  }
}

export default WestworldMap

