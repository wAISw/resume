import React, {Component} from 'react'
import './styles.scss'

export default class Project extends Component {
  render() {
    let {id, detailText, showProject, nextProject} = this.props;
    return (
      <div className='project-wrap bl-show-work'>
        <div className='content'>
          <div>
            <img src={`./images/${id}.jpg`}/>
            <br/>
            <br/>
            <h4>Project Overview</h4>
            <p className='detail-text'>{detailText.overview}</p>
            <h4>Project Details</h4>
            <p className='detail-text'>{detailText.details}</p>
          </div>
        </div>
        <nav>
          <span className='bl-next-work' onClick={() => nextProject(id)}>&gt; Next Project</span>
          <span className='glyphicon glyphicon-remove-sign icon-close' onClick={() => showProject()}/>
        </nav>
      </div>
    )
  }
}

