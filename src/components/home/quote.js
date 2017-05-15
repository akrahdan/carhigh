
  import React, { Component} from 'react';
  export default class Quote extends Component {
      render() {
        return(
        <div className="_style_2DMNUP" style={{zIndex: 30, position: 'absolute', left: 145, top: '-166px'}}>
          <div className="_style_3Yp9vg" >
            <div className="home__drive-form-sidebar _style_4le0P0" >
              <form className="layout layout--flush section-drive-hero soft portable-soft-large" >
                <div className="layout__item one-whole" >
                  <div className="home__preview-rider-image float--left"  />
                  <div className="float--left ride-header" >
                    <h4 className="flush hard" >Ride with Uber</h4>
                    <a className="btn btn--link hard--bottom rider-signup text--uppercase primary-font--bold  borderless--left" href="https://get.uber.com/sign-up" >{/* react-text: 164 */}Sign up{/* /react-text */}<i className="icon icon_right-arrow push-tiny--left"  /></a>
                  </div>
                </div>
                <div className="background-line" >
                  <span className="push-tiny--sides text--uppercase small" >Or</span>
                </div>
                <div className="layout__item one-whole margin-medium" >
                  <div className="home__preview-driver-image float--left"  />
                  <h4 className="flush hard float--left drive-header" >Sign up to drive</h4>
                </div>
                <div className="layout__item one-whole layout layout--flush" >
                  <div className="layout__item one-half push-tiny--bottom" >
                    <div className >
                      <input type="text" className="text-input text-input--joined flush--bottom border--left border--ends" placeholder="First Name" defaultValue  />
                    </div>
                  </div>
                  <div className="layout__item one-half" >
                    <div className >
                      <input type="text" className="text-input text-input--joined--right flush--bottom border--sides border--ends" placeholder="Last Name" defaultValue  />
                    </div>
                  </div>
                  <div className="layout__item one-whole" >
                    <div className >
                      <input type="email" className="text-input border--top border--sides" placeholder="Email" defaultValue  />
                    </div>
                  </div>
                  <div className="layout__item one-whole" >
                    <div className >
                      <input type="tel" className="text-input flush--bottom border--top border--sides" placeholder="Phone" defaultValue  />
                    </div>
                  </div>
                  <div className="layout__item one-whole push-tiny--bottom" >
                    <div className >
                      <input type="password" className="text-input border--ends border--sides" placeholder="Create Password" defaultValue  />
                    </div>
                  </div>
                  <div className="layout__item one-whole push-tiny--bottom" >
                    <div >
                      <div style={{position: 'relative'}} >
                        <div style={{WebkitBoxLines: 'multiple', MozBoxSizing: 'border-box', WebkitFlexWrap: 'wrap', MsFlexWrap: 'wrap', WebkitTransition: 'all 400ms ease', height: 52, flexWrap: 'wrap', borderColor: '#E5E5E4', transition: 'all 400ms ease', margin: 0, backgroundColor: '#FFFFFF', borderStyle: 'solid', borderWidth: 1, boxSizing: 'border-box', marginBottom: 24}} className="_style_3jmRTe" >
                          <input type="text" className="text-input autocomplete__input _style_JS22f" placeholder="City" autocomplete="false" defaultValue aria-autocomplete="list" aria-live="assertive" style={{MsFlexPositive: 1, MozBoxSizing: 'border-box', WebkitFlexGrow: 1, WebkitTransition: 'all 400ms ease', flexGrow: 1, fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif', fontSize: 14, fontWeight: 'normal', lineHeight: 24, border: 'none', padding: 10, textAlign: 'none', transition: 'all 400ms ease', marginBottom: 0, background: 'transparent', boxSizing: 'border-box', color: '#000000', outline: 'none'}}  />
                        </div>
                        <div style={{MozBoxSizing: 'border-box', boxSizing: 'border-box', border: '1px solid #E5E5E4', position: 'absolute', width: '100%', background: '#FFFFFF', zIndex: 1000, visibility: 'hidden'}} >
                          <div style={{maxHeight: 300, overflow: 'auto'}} >
                            <div aria-live="assertive"  />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layout__item one-whole push-tiny--bottom" >
                    <div className >
                      <input type="text" className="text-input border--ends border--sides" placeholder="Invite Code (Optional)" defaultValue  />
                    </div>
                  </div>
                  <div className="layout__item one-whole push-small--bottom" >
                    <a href="#" style={{paddingLeft: 10}} className="btn btn--primary btn--arrow position--relative btn--full error-retry-btn" >
                      <div className="block-context soft-small--right" >Sign Up To Drive</div>
                      <i className="icon_right-arrow-thin icon transition delta position--absolute"  />
                    </a>
                  </div>
                  <input type="submit" hidden  />
                  <div className="layout__item one-whole" >
                    <div className="push-tiny--bottom" >
                      Or
                      <a href="https://partners.uber.com/login/upgrade?lite=1">sign up</a> with your rider account.
                    </div>
                    <p className="legal-disclaimer flush" >
                      By proceeding, I agree that Uber or its representatives may contact me by email, phone, or SMS (including by automatic telephone dialing system) at the email address or number I provide, including for marketing purposes. I have read and understand the relevant
                      <a href="/legal/privacy/drivers-us/"> Driver Privacy Statement</a>.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


        );
        }
        }
