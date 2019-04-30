import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters';

class App extends Component {

  state = {
    hosts: [],
    areas: [],
    selectedHost: undefined
  }

  fetchHosts = () => {
    fetch('http://localhost:4000/hosts')
      .then(res => res.json())
      .then(data => {
        this.setState({ hosts: data })
      })
  }

  fetchAreas = () => {
    fetch('http://localhost:4000/areas')
      .then(res => res.json())
      .then(data => {
        this.setState({ areas: data })
      })
  }

  componentDidMount() {
    this.fetchHosts()
    this.fetchAreas()
  }

  renderInactiveHosts = () => {
    const inactiveHosts = [...this.state.hosts].filter(host => host.active === false)
    return inactiveHosts
  }

  renderActiveHosts = () => {
    const activeHosts = [...this.state.hosts].filter(host => host.active === true)
    return activeHosts
  }

  handlePicClick = (e) => {
    const hostId = parseInt(e.target.parentElement.id)
    const selectedHost = [...this.state.hosts].find(host => host.id === hostId)
    this.setState({ selectedHost: selectedHost })
  }

  toggle = (e, id) => {
    this.updateHost(e, 'toggle', id)
  }

  handleChange = (e, id) => {
    this.updateHost(e, 'change', id)
  }

  updateHost = (e, update, id) => {
    const hostsArray = [...this.state.hosts]
    const foundHost = [...this.state.hosts].find(host => host.id === id)
    const idx = hostsArray.findIndex(host => host.id === id)

    switch (update) {
      case 'toggle':
        const status = foundHost.active
        foundHost.active = !status
        hostsArray[idx] = foundHost
        this.setState({ hosts: hostsArray })

        break;

      case 'change':
        const newArea = e.target.innerText
        foundHost.area = newArea
        hostsArray[idx] = foundHost
        this.setState({ hosts: hostsArray })
        break;

      default:
        break;
    }
    hostsArray[idx] = foundHost

    return hostsArray

  }

  clickAll = (status) => {
    const hostsArray = [...this.state.hosts]
    switch (status) {
      case true:
        hostsArray.map(host => host.active = false)
        this.setState({ hosts: hostsArray })
        break;

      case false:
        hostsArray.map(host => host.active = true)
        this.setState({ hosts: hostsArray })
        break;

      default:
        break;
    }

  }

  render() {
    return (
      <Segment id='app'>
        <WestworldMap
          areas={this.state.areas}
          onClick={this.handlePicClick}
          hosts={this.renderActiveHosts()}
          selectedHost={this.state.selectedHost} />
        <Headquarters
          hosts={this.renderInactiveHosts()}
          onClick={this.handlePicClick}
          selectedHost={this.state.selectedHost}
          toggle={this.toggle}
          handleChange={this.handleChange}
          clickAll={this.clickAll} />
      </Segment>
    )
  }
}

export default App;
