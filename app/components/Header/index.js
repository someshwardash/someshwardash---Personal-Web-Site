import React from 'react';
import { FormattedMessage } from 'react-intl';

import {grey,red,yellow,blue,green} from '../../colors.js';
import messages from './messages';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title = {<FormattedMessage {...messages.headerTitle} />}
          style={{
            textAlign: 'center',
            backgroundColor: blue
          }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
            <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Projects</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Projects</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
