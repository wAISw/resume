import React, {Component} from 'react'
import NavLink from '../../components/NavLink'

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
        {/*<ul className='nav nav-pills'>*/}
        {/*<li><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></li>*/}
        {/*<li><NavLink to='/admin'>Админка</NavLink></li>*/}
        {/*<li><NavLink to='/list'>Список жанров</NavLink></li>*/}
        {/*<li><NavLink to='/login'>Войти</NavLink></li>*/}
        {/*</ul>*/}
        {this.showCloseButton()}
        {this.props.children}
      </div>
    )
  }
}
