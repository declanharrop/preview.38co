import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ServicesIcon from '@material-ui/icons/Code';
import AboutIcon from '@material-ui/icons/AccountCircle';
import BlogIcon from '@material-ui/icons/Book';
import ContactIcon from '@material-ui/icons/LocalPhone';
import OurWorkIcon from '@material-ui/icons/PhotoLibrary';

import './Navigation.css'

const styles = {
  list: {
    width: '250px',
  },

  drawer: {
    backgroundColor: 'grey',
  },

  menuButton: {
    color:'white',
    width: '20px',
    height: '50px',
    margin: '10px',
  },

  Logo: {
    color: '#3F424C',
  },

  dividerShrink: {
    margin: '0px 30px'
  },

  dividerShrinkSM: {
    margin: '0px 10px'
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
            <img className='centered' style={{height: '80px'}} src={require('../img/TECLogo.png')} alt='38co Logo' />
          </div>
          <NavLink to='/'>
            <div className='navButton br2 mh2 mv1 pl2 pv1 pt2'>
              <div className="mw7 center ph1-ns">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                      <HomeIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <h4 className='dtc v-mid menuItem pl2 fw4'>Home</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/services'>
            <div className='navButton br2 mh2 mv1 pl2 pv1'>
              <div className="mw7 center ph1-ns">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                      <ServicesIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <h4 className='dtc v-mid ph2 menuItem fw4'>Services</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/OurWork'>
            <div className='navButton br2 mh2 mv1 pl2 pv1'>
              <div className="mw7 center ph1-ns">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                      <OurWorkIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <h4 className='dtc v-mid ph2 menuItem fw4'>Our Work</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/about'>
            <div className='navButton br2 mh2 mv1 pl2 pv1'>
              <div className="mw7 center ph1-ns">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                    <AboutIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <h4 className='dtc v-mid ph2 menuItem fw4'>About</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/blog'>
            <div className='navButton br2 mh2 mv1 pl2 pv1'>
              <div className="mw7 center ph1-ns">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                      <BlogIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <h4 className='dtc v-mid ph2 menuItem fw4'>Blog</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/contact'>
            <div className='navButton br2 mh2 mv1 pl2 pv1'>
              <div className="mw7 center ph1-ns">
                <div className="cf ph1-ns">
                  <div className="fl w-30 pa2 pl3">
                    <div className="pv1 h2">
                      <ContactIcon className={classes.Logo}/>
                    </div>
                  </div>
                  <div className="fl w-70 pa2">
                    <div className="pv1 h2 dt">
                      <h4 className='dtc v-mid ph2 menuItem fw4'>Contact</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <Divider className={classes.dividerShrink} />

          <div className='mv4 tc'>
            <div className='mh3 mb4 dib'>
              <a href='tel:+447446976265'>
                <img src={require('../img/icons/call.svg')} className='callIcon' alt='Call us'/>
              </a>
            </div>
            <div className='mh3 dib'>
              <a href='https://www.instagram.com/38co.io/' target='_blank' rel="noreferrer noopener">
                <img src={require('../img/icons/instagram.svg')} className='instagramIcon' alt='Instagram'/>
              </a>
            </div>
          </div>

        </List>
      </div>
    );

    return (
      <div>
        <div className='menuBar w-100 cf'>
          <div className='fl'>
            <Button className={classes.menuButton} onMouseEnter={classes.linkHover} onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
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
          <div className='mr3'>
            <NavLink to='/'>
              <img className='fr' style={{height: '50px', padding: '10px'}} src={require('../img/TECLogo.png')} alt='38co Logo'/>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);