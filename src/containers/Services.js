import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Services.css'

import WebDevIcon from '@material-ui/icons/Code';
import BrandingIcon from '@material-ui/icons/Business';
import UXUIIcon from '@material-ui/icons/Smartphone';
import WebDesIcon from '@material-ui/icons/Web';
import MaintenanceIcon from '@material-ui/icons/SettingsRounded';
import SEOIcon from '@material-ui/icons/Search';

const Services = () => {

  return (
    <div id='T'>
      <header className="vh-100 bg-light-pink dt w-100">
        <div 
          style={{
            background: 'url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right', 
            backgroundSize: 'cover'
          }} 
          className="dtc v-mid cover ph3 ph4-m ph5-l"
        >
          <h1 className="f2 fw8 f-subheadline-l greyFont">Our Services</h1>
          <h2 className="f5 fw5">Take a look at everything we offer</h2>
        </div>
      </header>

      <div>
        <div className='mw9 center pv6'>
          <div className='tc pb4'>
            <h2 className='fw5 f2' >Our big services</h2>
          </div>
          
          <div className="dt-l dt--fixed-l">
            <div className="dtc-l tc">
              <div className='bg-white br2 ma2 pb4 pt4 ph3 shadow-4'>
                <div>
                  <WebDevIcon style={{
                    fontSize: 66,
                    color: 'red',
                  }}/>
                </div>
                <div>
                  <h3>
                    Web Development
                  </h3>
                </div>
                <div>
                  <p>
                  At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                  We believe in giving our clients clear and honest advice on what is best for their business. 
                  We offer a range of options when it comes to web design and development that can fit a particular 
                  clients needs and budget. 
                  </p>
                </div>
                <NavLink to='/Services#WebDev' className='no-underline'>
                  <div className='dt center buttonAlt mt4 br2 shadow-4 grow'>
                    <p className='dtc v-mid fw3 wtTxt'>Show me more!</p>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="dtc-l tc">
              <div className='bg-white br2 ma2 pb4 pt4 ph3 shadow-4'>
                <div>
                  <BrandingIcon style={{
                    fontSize: 66,
                    color: 'lightBlue',
                  }}/>
                </div>
                <div>
                  <h3>
                    Branding
                  </h3>
                </div>
                <div>
                  <p>
                  At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                  We believe in giving our clients clear and honest advice on what is best for their business. 
                  We offer a range of options when it comes to web design and development that can fit a particular 
                  clients needs and budget. 
                  </p>
                </div>
                <NavLink to='/Services#Branding' className='no-underline'>
                  <div className='dt center buttonAlt mt4 br2 shadow-4 grow'>
                    <p className='dtc v-mid fw3 wtTxt'>Show me more!</p>
                  </div>
                </NavLink>
              </div>
            </div>


            <div className="dtc-l tc">
              <div className='bg-white br2 ma2 pb4 pt4 ph3 shadow-4'>
                <div>
                  <UXUIIcon style={{
                    fontSize: 66,
                    color: 'green',
                  }}/>
                </div>
                <div>
                  <h3>
                    UX/UI Design
                  </h3>
                </div>
                <div>
                  <p>
                  At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                  We believe in giving our clients clear and honest advice on what is best for their business. 
                  We offer a range of options when it comes to web design and development that can fit a particular 
                  clients needs and budget. 
                  </p>
                </div>
                <NavLink to='/Services#UXUI' className='no-underline'>
                  <div className='dt center buttonAlt mt4 br2 shadow-4 grow'>
                    <p className='dtc v-mid fw3 wtTxt'>Show me more!</p>
                  </div>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
        
        {/*


          Web Development Section


        */}

        <div 
          id='WebDev' 
          className='pv2 WebDevBG'
        >
          <div className='mw9 center tc'>
            <div className='pt5'>
              <WebDevIcon 
                style={{
                  fontSize: 140,
                  color: 'white',
                }}
              />
            </div>
            <h1 className='sectionH1'>Web Development</h1>
            
            <div className='dt-l dt--fixed-l mt5 mb5'>

              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <WebDesIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>Custom Web Design</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>
              
              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <MaintenanceIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>Maintenance</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>

              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <SEOIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>SEO</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>

            </div>

            <NavLink to='/Contact#T' className='no-underline'>
              <div className='dt center buttonAlt mt3 mb5 br2 shadow-4 grow'>
                <p className='dtc v-mid fw3'>Get in touch!</p>
              </div>
            </NavLink>            
          
          </div>
        </div>

        <div className='largeImg1 vh-75'></div>

        {/*


          Branding Section


        */}

        <div 
          id='Branding' 
          className='pv2 WebDevBG'
        >
          <div className='mw9 center tc'>
            <div className='pt5'>
              <BrandingIcon 
                style={{
                  fontSize: 140,
                  color: 'white',
                }}
              />
            </div>
            <h1 className='sectionH1'>Branding</h1>
            
            <div className='dt-l dt--fixed-l mt5 mb5'>

              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <WebDesIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>Custom Web Design</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>
              
              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <MaintenanceIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>Maintenance</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>

              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <SEOIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>SEO</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>

            </div>

            <NavLink to='/Contact#T' className='no-underline'>
              <div className='dt center buttonAlt mt3 mb5 br2 shadow-4 grow'>
                <p className='dtc v-mid fw3'>Get in touch!</p>
              </div>
            </NavLink>            
          
          </div>
        </div>

        <div className='largeImg1 vh-75'></div>

        {/*


          UX/UI Section


        */}

        <div 
          id='UXUI' 
          className='pv2 WebDevBG'
        >
          <div className='mw9 center tc'>
            <div className='pt5'>
              <UXUIIcon 
                style={{
                  fontSize: 140,
                  color: 'white',
                }}
              />
            </div>
            <h1 className='sectionH1'>UX/UI Design</h1>
            
            <div className='dt-l dt--fixed-l mt5 mb5'>

              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <WebDesIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>Custom Web Design</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>
              
              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <MaintenanceIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>Maintenance</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>

              <div className='dtc-l tc'>
                <div className='ma2 pa4 shadow-2'>
                  <SEOIcon 
                    style={{
                      fontSize: 50,
                      color: 'white',
                    }}
                  />
                  <h2 className='sectionSub'>SEO</h2>
                  <p className='white'>
                    At ThirtyEight Co we specialise in websites for businesses. We are based in Derby. 
                    We believe in giving our clients clear and honest advice on what is best for their 
                    business. We offer a range of options when it comes to web design and development 
                    that can fit a particular clients needs and budget.
                  </p>
                </div>
              </div>

            </div>

            <NavLink to='/Contact#T' className='no-underline'>
              <div className='dt center buttonAlt mt3 mb5 br2 shadow-4 grow'>
                <p className='dtc v-mid fw3'>Get in touch!</p>
              </div>
            </NavLink>            
          
          </div>
        </div>

        <div className='largeImg1 vh-75'></div>

        <div className='pa5'></div>

      </div>


    </div>
  );
};

export default Services;