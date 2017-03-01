import React, {Component} from 'react'
import Box from '../Box'
import './styles.scss'

export default class Home extends Component {
  render() {
    let titles = [
      {
        title: 'Hi My Name is Mike',
        link: 'about',
        transitionName: 'block-1',
        styles: {
          background: 'url(\''+require('./images/back2.jpg')+'\') no-repeat'
        }
      },
      {
        title: 'Latests Works',
        link: 'works',
        transitionName: 'block-2',
        styles: {
          background: 'url(\''+require('./images/back3.jpg')+'\') no-repeat'
        }
      },
      {
        title: 'My deepest thoughts',
        link: 'blog',
        transitionName: 'block-3',
        styles: {
          background: 'url(\''+require('./images/back4.jpg')+'\') no-repeat'
        }
      },
      {
        title: 'Contact Me',
        link: 'contacts',
        transitionName: 'block-4',
        styles: {
          background: 'url(\''+require('./images/back5.jpg')+'\') no-repeat'
        }
      }
    ];
    return (
      <div>
        { titles.map((boxObj, key) => <Box key={key} {...boxObj}/>) }
      </div>
    )
  }
}
