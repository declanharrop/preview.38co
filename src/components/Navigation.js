import React from 'react';
import { NavLink} from 'react-router-dom';
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
    width: '220px',
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
            <img className='centered' style={{height: '100px'}} src={require('../img/TECLogo.png')} alt='38co Logo' />
          </div>
          <NavLink to='/#T'>
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
                      <p className='dtc v-mid ph2 menuItem'>Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/services#T'>
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
                      <p className='dtc v-mid ph2 menuItem'>Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/OurWork#T'>
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
                      <p className='dtc v-mid ph2 menuItem'>Our Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/about#T'>
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
                      <p className='dtc v-mid ph2 menuItem'>About</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/blog#T'>
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
                      <p className='dtc v-mid ph2 menuItem'>Blog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <Divider className={classes.dividerShrinkSM} />
          <NavLink to='/contact#T'>
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
                      <p className='dtc v-mid ph2 menuItem'>Contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <div className='socialMedia'>
            <Divider className={classes.dividerShrink} />
            <div className='socialMediaIcon'>
              <img className='fl pl4 callIcon' style={{height: '30px'}} src={require('../img/icons/Call.png')} alt='38co Logo'/>
            </div>
            <div className='socialMediaIcon'>
              <img className='fr pr4 instaIcon' style={{height: '30px'}} src={require('../img/icons/Insta.png')} alt='38co Logo'/>
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