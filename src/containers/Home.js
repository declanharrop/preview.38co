import React, { Component }from 'react';
import { NavLink} from 'react-router-dom';
import BlogBanner from '../components/BlogBanner';
import { Helmet } from 'react-helmet';

import './Home.css'

import WebDevIcon from '@material-ui/icons/Code';
import BrandingIcon from '@material-ui/icons/Business';


export default class Home extends Component {

  render() {
    return (
      <div id='T'>
        <Helmet>
          <title>38co</title>
          <meta name='description' content='ThirtyEightCo home page'/>        
        </Helmet>
        <div className='header'>
          <div className="vh-100 dt w-100 largeImg1">
            <div className="dtc v-mid tc white ph3 ph4-l">
              <img
                src={require('../img/tecBlockLogoWhite.svg')}
                style={{
                  height: '140px'
                }}
                alt='38co Logo'
              />
              <h1 className="f3 f2-m f1-l fw6 tc">Welcome to ThirtyEight Co</h1>
              <div className='ph1'>
                <NavLink to='/OurWork' className='no-underline'>
                  <div className='button br2 mh4 mv2 inline-flex items-center shadow-3 grow'>
                    <p className='tc fw3 center'>Our Work</p>
                  </div>
                </NavLink>
                <NavLink to='/Services' className='no-underline'>
                  <div className='button br2 mh4 mv2 inline-flex items-center shadow-3 grow'>
                    <p className='tc fw3 center'>Services</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div> 
        </div>
        <div className=''>
          <div className='mw8 center pv6'>
            <div className='cf pv4'>
              <div className='fl w-100 pa2 tc'>
                <div> 
                  <h2 className='f2'>Hey</h2>
                </div>
                <div>
                  <p className=''>
                    Looking to enhance your business? We lovingly create Web Development, UXUI Design and Branding projects. 
                    We are based in Derbyshire, England. You can check out all of our latest work via Instagram. 
                    Alternatively if you want to find out what we are thinking, why don't you take a look at our blog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homeHeySec'>
          <div className="mw8 center pv5">
            <div className="cf ph2">

              <div className="fl w-100 w-50-l pa4 tc">
                <div className='center pv2'>
                  <WebDevIcon style={{
                    fontSize: 66,
                    color: 'white',
                  }}/>
                </div>  
                <h3 className='f3 fw6 white pv2'>Web Development</h3>
                <p className='white'>
                At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. We believe in giving our 
                clients clear and honest advice on what is best for their business. We offer a range of options when it comes 
                to web design and development that can fit a particular clients needs and budget.
                </p>
                <div className='mt4'>
                  <NavLink to='/Services' className='no-underline'>
                    <div className='dt center buttonAlt br2 shadow-4 grow'>
                      <p className='dtc v-mid fw3 wtTxt'>Show me more!</p>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="fl w-100 w-50-l pa4 tc">
                <div className='center pv2'>
                  <BrandingIcon style={{
                    fontSize: 66,
                    color: 'white',
                  }}/>
                </div>  
                <h3 className='f3 fw6 white pv2'>Business Branding</h3>
                <p className='white'>
                Branding is the marketing practice of creating a name, symbol or design that identifies and differentiates one 
                product from another. Branding is a key element in putting across the benefits of your product or service to the 
                scustomers. An effective brand strategy gives you a major edge in increasingly competitive market.
                </p>
                <div className='mt4'>
                  <NavLink to='/Services' className='no-underline'>
                    <div className='dt center buttonAlt br2 shadow-4 grow'>
                      <p className='dtc v-mid fw3 wtTxt'>Show me more!</p>
                    </div>
                  </NavLink>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className='w-100 lightGreyBG pv5'>
          <div className=''>
            <h2 className='fw6 tc'>Our Partners</h2>
          </div>
          <div className='mw8 center tc'>
            <div className='dib mh4'>
              <div className='thi' title='Total Home Improvements Logo'>
                <a href='https://www.totalhomeimp.co.uk' target='_blank' rel="noreferrer noopener">
                </a>
              </div>
            </div>

            <div className='dib mh4'>
              <div className='lnb' title='Lunula Nails and Beauty Logo'>
                <a href='https://www.lunulanailsandbeauty.com' target='_blank' rel="noreferrer noopener">
                </a>
              </div>
            </div>

            <div className='dib mh4'>
              <div className='aath' title='Alice and the Hair Logo'>
                <a href='https://www.aliceandthehair.co.uk' target='_blank' rel="noreferrer noopener">
                </a>
              </div>
            </div>
          </div>
        </div>

        <BlogBanner />

      </div>
    );
  }
};
