import React, {Component} from 'react'
import Box from 'components/Box'

export default class Home extends Component {
  render() {
    let titles = [
      {
        title: 'Hi My Name is Mike',
        link: 'about'
      },
      {
        title: 'Latests Works',
        link: 'works'
      },
      {
        title: 'Contact Me',
        link: 'contacts'
      },
      {
        title: 'My deepest thoughts',
        link: 'blog'
      }
    ];
    return (
      <div>
        { titles.map((boxObj, key) => <Box key={key} {...boxObj}/>) }
      </div>
    )
  }
}
