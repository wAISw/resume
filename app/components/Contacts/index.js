import React, {Component} from 'react'
import './styles.scss'
import NavLink from '../../components/NavLink'

export default class Contacts extends Component {
  render() {
    return <div className='detail-page contacts-content bl-content'>
      <div className='row-fluid'>
        <div className='col-xs-12'>
          <h2>Get in touch</h2>
          <br/>
          <p>I am available for freelance jobs. Please contact me and send me your questions and inquiries.</p>
          <p>
          </p><p>your@email.com | +34 600669933 | Madrid, Spain</p>
          <p>
            <NavLink to='/' className='social-network facebook'/>
            <NavLink to='/' className='social-network pinterest'/>
            <NavLink to='/' className='social-network flickr'/>
            <NavLink to='/' className='social-network dribbble'/>
            <NavLink to='/' className='social-network twitter'/>
            <NavLink to='/' className='social-network apple'/>
            <NavLink to='/' className='social-network skype'/>
            <NavLink to='/' className='social-network tumblr'/>
            <NavLink to='/' className='social-network vimeo'/>
          </p>
        </div>
      </div>
    </div>
  }
}