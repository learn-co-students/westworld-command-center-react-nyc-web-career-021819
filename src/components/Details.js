import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
// import HostInfo from './HostInfo'
import Host from './Host'
import HostInfo1 from './HostInfo1';


const Details = (props) => {

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo} />)


  return (
    <Segment id="details" className="HQComps">
      {props.selectedHost ? <HostInfo1 host={props.selectedHost} toggle={props.toggle} handleChange={props.handleChange} /> : renderSomething()}
    </Segment>
  )
}

export default Details
