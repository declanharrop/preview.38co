import React from 'react';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import HomeIcon from '@material-ui/icons/Home';
import ServicesIcon from '@material-ui/icons/Code';
import ContactIcon from '@material-ui/icons/LocalPhone';

import './Navigation.css'

const styles = {
  list: {
    width: '220px',
  },

  drawer: {
    backgroundColor: 'green',
  },

  menuButton: {
    border: '20px 20px',
    color:'black',
    width: '40px',
    height: '40px',
    margin: '20px'  
  }
};

class Navigation extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className='avenir'>
        <List className={classes.list}>

          
          <NavLink to='/'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <HomeIcon/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2'>Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to='/services'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <ServicesIcon/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2'>Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to='/about'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <ContactIcon/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2'>About</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to='/blog'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <ContactIcon/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2'>Blog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to='/contact'>
          <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <ContactIcon/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2'>Contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </List>
      </div>
    );

    return (
      <div>
        <Button className={classes.menuButton} onMouseEnter={classes.linkHover} onClick={this.toggleDrawer('left', true)}>M</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            className={classes.drawer}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);