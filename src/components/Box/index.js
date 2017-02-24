import React, {Component} from 'react'
import './styles.scss'
import NavLink from '../../components/NavLink'

export  default  class Box extends Component {
  render() {
    const {title, link} = this.props;
    return <section>
      <div className='bl-box'>
        <h2><NavLink to={link}>{title}</NavLink></h2>
      </div>
    </section>
  }
}