import React, {Component} from 'react'
import './styles.scss'
import NavLink from '../../components/NavLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export  default  class Box extends Component {
  render() {
    const {title, link, styles, transitionName} = this.props;
    return <ReactCSSTransitionGroup
      component='div'
      transitionName={transitionName}
      transitionAppear={true}
      transitionAppearTimeout={700}
      transitionEnter={false}
      transitionLeave={true}>
      <section style={styles} className={transitionName}>
        <div className='bl-box'>
          <h2><NavLink to={link}>{title}</NavLink></h2>
        </div>
      </section>
    </ReactCSSTransitionGroup>
  }
}