import React, {Component} from 'react'
import NavLink from '../../components/NavLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './styles.scss'

export default class App extends Component {
  showCloseButton() {
    let pathname = (this.props.location.pathname || '').replace(/\//g, '');
    switch (pathname) {
      case 'about':
      case 'works':
      case 'contacts':
      case 'blog':
        return <NavLink to='/' className='glyphicon glyphicon-remove-sign icon-close'/>;
      default:
        return '';
    }
  }

  render() {
    return (
      <div id='bl-main' className='bl-main'>
        {this.showCloseButton()}
        <ReactCSSTransitionGroup
          transitionName='page'
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
