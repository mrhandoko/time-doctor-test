import React, {Component} from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandDanger = '#f86c6b';

const doughnut = {
  datasets: [{
    data: [925, 250, 200],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row style={{ marginTop: 25, marginBottom: 25 }}>
          <Col xs="6" sm="12" md="12">
            <div style={{ display: 'inline-block' }}><h3>Company Dashboard</h3></div>
            <div className="pull-right" style={{ display: 'inline-block' }}>
              <button className="btn" style={{ backgroundColor: 'white', marginLeft: 10, marginRight: 10 }}>Edit Layout</button>
              <button className="btn" style={{ backgroundColor: '#6887A5', marginLeft: 10, marginRight: 10, color: 'white' }}>
                <i className="icon-plus" style={{ marginRight: 5 }}></i>
                Add Widget
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card style={{ height: 350 }}>
              <CardHeader>
                <div className="float-right" style={{ color: '#536c79' }}>
                  <ButtonGroup style={{ backgroundColor: '#f0f3f5', marginRight: 10 }}>
                    <Dropdown id='card2' isOpen={this.state.card2}
                              toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                      <DropdownToggle caret className="p-0" style={{ backgroundColor: '#f0f3f5', borderColor: '#f0f3f5', color: '#536c79' }}>
                        Daily
                      </DropdownToggle>
                      <DropdownMenu className={this.state.card2 ? "show" : ""} right>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Dropdown id='card3' isOpen={this.state.card3}
                              toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                      <DropdownToggle className="p-0" style={{ backgroundColor: '#f0f3f5', borderColor: '#f0f3f5' }}>
                        <i className="icon-options-vertical"></i>
                      </DropdownToggle>
                      <DropdownMenu className={this.state.card3 ? "show" : ""} right>
                        <DropdownItem>Edit Widget</DropdownItem>
                        <DropdownItem>Delete Widget</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
                Keyboard & Mouse Activity
              </CardHeader>
              <CardBlock className="card-body">
                <ul className="horizontal-bars type-2">
                  <li>
                    <img src={require('../../views/Icons/Avatars/avatar1.png')} alt="avatar" style={{ margin: 5 }}/>
                    <span className="title">Raju Mazumder</span>
                    <span className="value">98%</span>
                    <div className="bars">
                      <Progress className="progress-xs" color="success" value="98"/>
                    </div>
                  </li>
                  <li>
                    <img src={require('../../views/Icons/Avatars/avatar2.png')} alt="avatar" style={{ margin: 5 }}/>
                    <span className="title">Khurram Butt</span>
                    <span className="value">88%</span>
                    <div className="bars">
                      <Progress className="progress-xs" color="success" value="88"/>
                    </div>
                  </li>
                  <li>
                    <img src={require('../../views/Icons/Avatars/avatar3.png')} alt="avatar" style={{ margin: 5 }}/>
                    <span className="title">Eslam Mahmod</span>
                    <span className="value">81%</span>
                    <div className="bars">
                      <Progress className="progress-xs" color="success" value="81"/>
                    </div>
                  </li>
                  <li>
                    <img src={require('../../views/Icons/Avatars/avatar4.png')} alt="avatar" style={{ margin: 5 }}/>
                    <span className="title">Margareth Liu</span>
                    <span className="value">78%</span>
                    <div className="bars">
                      <Progress className="progress-xs" color="success" value="78"/>
                    </div>
                  </li>
                  <li>
                    <img src={require('../../views/Icons/Avatars/avatar5.png')} alt="avatar" style={{ margin: 5 }}/>
                    <span className="title">Stephanie Yoe</span>
                    <span className="value">71%</span>
                    <div className="bars">
                      <Progress className="progress-xs" color="success" value="71"/>
                    </div>
                  </li>
                </ul>
              </CardBlock>
              <CardFooter style={{ height: 30, paddingTop: 3, backgroundColor: '#fff' }}>
                <img src={require('../../views/Icons/Avatars/avatar1.png')} height={25} alt="avatar" style={{ marginRight: -15 }}/>
                <img src={require('../../views/Icons/Avatars/avatar2.png')} height={25} alt="avatar" style={{ marginRight: -15 }}/>
                <img src={require('../../views/Icons/Avatars/avatar3.png')} height={25} alt="avatar" />
                <button style={{ color: '#536c79', backgroundColor: 'white', borderColor: 'white', fontSize: 12, borderWidth: 0 }}>+10 more teams</button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card style={{ height: 350 }}>
              <CardHeader>
                <div className="float-right" style={{ color: '#536c79' }}>
                  <ButtonGroup style={{ backgroundColor: '#f0f3f5', marginRight: 10 }}>
                    <ButtonDropdown id='card1' isOpen={this.state.card1}
                                    toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                      <DropdownToggle caret className="p-0" style={{ backgroundColor: '#f0f3f5', borderColor: '#f0f3f5', color: '#536c79' }}>
                        Daily
                      </DropdownToggle>
                      <DropdownMenu className={this.state.card1 ? "show" : ""} right>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                  <ButtonGroup>
                    <ButtonDropdown id='card4' isOpen={this.state.card4}
                                    toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                      <DropdownToggle className="p-0" style={{ backgroundColor: '#f0f3f5', borderColor: '#f0f3f5' }}>
                        <i className="icon-options-vertical"></i>
                      </DropdownToggle>
                      <DropdownMenu className={this.state.card4 ? "show" : ""} right>
                        <DropdownItem>Edit Widget</DropdownItem>
                        <DropdownItem>Delete Widget</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>

                </div>
                Highest Mobile Users
              </CardHeader>
              <CardBlock className="card-body">
                <Row>
                  <Col xs="6" sm="6" lg="6" style={{ padding: 0 }}>
                    <div style={{ display: 'inline-block' }}>
                      <img src={require('../../views/Icons/Avatars/avatar1.png')} alt="avatar" style={{ marginBottom: 20, marginRight: 5, marginLeft: 10 }}/>
                      <div className="bars" style={{ display: "inline-block" }}>
                        <div>Elle Javier - Quingco</div>
                        <div style={{ fontWeight: 'bold' }}>9h 20m</div>
                      </div>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                      <img src={require('../../views/Icons/Avatars/avatar2.png')} alt="avatar" style={{ marginBottom: 20, marginRight: 5, marginLeft: 10 }}/>
                      <div className="bars" style={{ display: "inline-block" }}>
                        <div>Lester Douglas</div>
                        <div style={{ fontWeight: 'bold' }}>1h 25m</div>
                      </div>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                      <img src={require('../../views/Icons/Avatars/avatar1.png')} alt="avatar" style={{ marginBottom: 20, marginRight: 5, marginLeft: 10 }}/>
                      <div className="bars" style={{ display: "inline-block" }}>
                        <div>Dmitry Shytsko</div>
                        <div style={{ fontWeight: 'bold' }}>30m</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" sm="6" lg="6" style={{ padding: 0 }}>
                    <Doughnut data={doughnut} />
                  </Col>
                </Row>
              </CardBlock>
              <CardFooter style={{ height: 30, paddingTop: 3, backgroundColor: '#fff' }}>Card footer</CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
