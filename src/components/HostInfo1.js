import React, { Component } from 'react'
import '../stylesheets/HostInfo.css'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'

class HostInfo1 extends Component {

  state = {
    options: []
  }

  getAreas = () => {
    fetch('http://localhost:4000/areas')
      .then(res => res.json())
      .then(data => {
        let areaOptions = []
        data.forEach(area => {
          areaOptions.push({ key: area.id, text: area.name, value: area.name })
        })
        this.setState({ options: areaOptions })
      })
  }

  componentDidMount() {
    this.getAreas()
  }

  toggle = () => {
    console.log("The radio button fired");
  }

  render() {
    const { id, firstName, lastName, active, imageUrl, gender, area, authorized } = this.props.host
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} | {gender ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={(e) => { this.props.toggle(e, id) }}
                  label={active ? "Active" : "Inactive"}
                  checked={active ? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area: {area}
              <Dropdown
                onChange={(e) => { this.props.handleChange(e, id) }}
                value={area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo1
