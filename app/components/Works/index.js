import React, {Component} from 'react'
import './styles.scss'
// import NavLink from 'components/NavLink'
import Project from '../Project'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showDetail} from '../../actions/ProjectActions'
import {projectsInfo} from '../../constants/Project'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Works extends Component {
  showProject(project = null) {
    this.props.showDetail({project});
  }

  nextProject(projectId) {
    projectsInfo.map((project, key) => {
        if (project.id === projectId) {
          if (projectsInfo[key + 1]) {
            return this.props.showDetail({project: projectsInfo[key + 1]});
          } else {
            return this.props.showDetail({project: projectsInfo[0]});
          }
        }
      }
    );
  }

  showProjectList() {
    return projectsInfo.map(project => (
        <div key={project.id} className='col-xs-4'>
          <ul id='bl-work-items'>
            <li><span onClick={() => this.showProject(project)}>
                      <img src={require(`./images/${project.id}.jpg`)}/></span></li>
          </ul>
          <p>{project.name}</p>
        </div>
      )
    );
  }

  render() {
    let {project} = this.props.project || {};

    return (
      <div>
        <div className='detail-page works-content bl-content'>
          <div className='row-fluid'>
            <div className='col-xs-12'>
              <h2>Some Recent Projects</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page
                when
                looking
                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,
                as
                opposed to using 'Content here, content here', making it look like readable English.</p>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                text,
                and
                a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved
                over
                the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <div className='row-fluid'>
                {this.showProjectList()}
              </div>
            </div>
          </div>
        </div>
        {project && project.id
          ? (
            <ReactCSSTransitionGroup
              component='div'
              transitionName='project'
              transitionAppear={true}
              transitionLeave={true}
              transitionLeaveTimeout={5000}
              transitionAppearTimeout={0}>
              <Project
                {...project}
                showProject={this.showProject.bind(this)}
                nextProject={this.nextProject.bind(this)}/>
            </ReactCSSTransitionGroup>
          ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.project
  }
}


function mapDispatchToProps(dispatch) {
  return {
    showDetail: bindActionCreators(showDetail, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Works)