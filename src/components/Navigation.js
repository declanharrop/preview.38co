import React from 'react';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import ServicesIcon from '@material-ui/icons/Code';
import AboutIcon from '@material-ui/icons/AccountCircle';
import BlogIcon from '@material-ui/icons/Book';
import ContactIcon from '@material-ui/icons/LocalPhone';


import './Navigation.css'

const styles = {
  list: {
    width: '220px',
  },

  drawer: {
    backgroundColor: 'grey',
  },

  menuButton: {
    border: '20px 20px',
    color:'black',
    width: '40px',
    height: '40px',
    margin: '20px',
  },

  Logo: {
    color: '#3F424C',
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

          <div className='pv3 w-100'>
            <img className='centered' style={{height: '100px'}} src={require('../img/TECLogo.png')} alt='38co Logo' />
          </div>
          <NavLink to='/'>
            <div className='pv1 pt2'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <HomeIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2 menuItem'>Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider />
          <NavLink to='/services'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <ServicesIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2 menuItem'>Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider />
          <NavLink to='/about'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <AboutIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2 menuItem'>About</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider />
          <NavLink to='/blog'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <BlogIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2 menuItem'>Blog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider />
          <NavLink to='/contact'>
            <div className='pv1'>
              <div className="mw7 center ph1-ns bg-white">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <ContactIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <p className='dtc v-mid ph2 menuItem'>Contact</p>
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