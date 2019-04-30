import React, { Component } from 'react'
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

class Host extends Component {
  state = {
    clicked: false
  }


  handleClick = (e) => {
    const clicked = this.state.clicked
    this.setState({ clicked: !clicked }, this.props.onClick(e))

  }
  render() {

    return (
      <Card
        className={this.props.host === this.props.selectedHost ? "host selected" : "host"}
        onClick={this.handleClick}
        image={this.props.host.imageUrl}
        id={this.props.id}
        raised
      />
    )
  }
}

export default Host
