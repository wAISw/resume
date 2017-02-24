import React, {Component} from 'react'
import './styles.scss'

export default class About extends Component {
  render() {
    return <div className='detail-page about-content bl-content'>
      <div className='row-fluid'>
        <div className='col-xs-12'>
          <h2>A Little About Me</h2>
          <p>I am a freelance web developer and web designer living in London, UK. I started freelancing in 2009 and
            have worked for a wide range of personal clients and agencies.</p>
          <p>I offer a complete web solution to my clients. I can guide you through the early stages of project planning
            and research, help you with information architecture and user experience, design your website, and finally
            build the site for you.</p>
          <div className='row-fluid'>
            <div className='col-xs-8'>
              <h2>My Skills</h2>

              <div className='progress'>
                <div className='bar' style={{width: '73%'}}>HTML/CSS 73%</div>
              </div>
              <div className='progress'>
                <div className='bar' style={{width: '100%'}}>Web Design 100%</div>
              </div>
              <div className='progress'>
                <div className='bar' style={{width: '78%'}}>Photography 78%</div>
              </div>
              <div className='progress'>
                <div className='bar' style={{width: '80%'}}>Sound Design 80%</div>
              </div>
              <div className='progress'>
                <div className='bar' style={{width: '63%'}}>Party 63%</div>
              </div>

            </div>
            <div className='col-xs-4'></div>
            <div className='col-xs-12'>
              <br/>
              <br/>
            </div>
            <div className='col-xs-12'>
              <div className='row about-us'>
                <div className='col-xs-3'>
                  <h3><i className='glyphicon glyphicon-user icon-white'/> More About Me?</h3>
                  Claritas est etiam processus dynamicus, and mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc. Parum claram, anteposuerit litterarum formas humanitatis per seacula
                  quarta decima.
                </div>
                <div className='col-xs-3'>
                  <h3><i className='glyphicon glyphicon-heart icon-white'/> What I Love</h3>
                  Claritas est etiam processus dynamicus, and mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc. Parum claram, anteposuerit litterarum formas humanitatis per seacula
                  quarta decima.
                </div>
                <div className='col-xs-3'>
                  <h3><i className='glyphicon glyphicon-fire icon-white'/> Work Hard</h3>
                  Claritas est etiam processus dynamicus, and mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc. Parum claram, anteposuerit litterarum formas humanitatis per seacula
                  quarta decima.
                </div>
                <div className='col-xs-3'>
                  <h3><i className='glyphicon glyphicon-plane icon-white'/> Ready To Go</h3>
                  Claritas est etiam processus dynamicus, and mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc. Parum claram, anteposuerit litterarum formas humanitatis per seacula
                  quarta decima.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}