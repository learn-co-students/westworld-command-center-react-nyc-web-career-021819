import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {


  return (
    <Card.Group itemsPerRow={10}>
      {props.hosts.map((host, index) => {
        return <Host
          host={host}
          onClick={props.onClick}
          key={index}
          id={host.id}
          selectedHost={props.selectedHost} />
      })}
    </Card.Group>
  )
}

export default HostList
