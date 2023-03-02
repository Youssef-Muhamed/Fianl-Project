import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Style.css'
function Problems() {
  const navigate = useNavigate()
  return (
    <>

<div className='container'>
<div className='main-bar'>
      <div className='main-bar-header'>
        
          <h1> All Probelms </h1>
        
        <button className='ask-btn' onClick={()=>{navigate('/problems/add')}}>Add Probelm</button>
      </div>
      <div>
      <p>1 Problem</p>

      <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>5</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>10</p>
            <p>answers</p>
        </div >
        <div className="display-question-details">
            <Link to='/problems/1' className='question-title-link'>I Have Problem</Link>
            <div className='display-tags-time'>
                <div className='display-tags'>
                    <p>html</p>
                </div>
                <p className='display-time'>
                    asked 15-11-2022
                </p>
            </div>
        </div>
      </div> 
      </div>
    </div>
    


    </div>












    
{/* <div id="allcontent">
  <div id="greeting">
    <p className="welcome" id="slogan">Присоединяйтесь к Stack Overflow!</p>
    <p className="welcome">Stack Overflow – сообщество, состоящее из 6.9 миллионов
      программистов, таких же как и вы, помогающих друг другу.<br />
      Присоединяйтесь, это не займёт более минуты:</p>
    <p id="registration"><a href="www">Зарегистрироваться</a></p>
  </div>
  <div id="list-questions">
    <nav>
      <ul>
        <li><a href="index.html">interesting</a></li>
        <li><a href>featured</a></li>
        <li><a href>hot</a></li>
        <li><a href>week</a></li>
        <li><a href>month</a></li>
      </ul>
    </nav>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">0</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">12</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Faceboo k - Get unpublished and hidden posts with Real-Time API</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">0</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">2</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>htaccess rewrite in subdirectory</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">1</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">0</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">5</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Is there a way to debug IB_DESIGNABLE classes in a way that works?</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">0</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">2</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">4</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Preventing duplicates while selecting into variable in MySQL</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">1</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">0</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">8</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>prototype vars not being overwritten by constructor</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">20</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">2</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">0</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">3</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Django Rest-Framework Serializer: KeyError thrown on field that certainly exists</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">12</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">2</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">0</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">6</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Unity SetActive(true) not working after setting it to false at first?</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">600</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Increase the time for console report in Gatling</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>Is there a function for number parsing which works on iterators?</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="nums">
        <div className="votes">
          <div className="numeric">5</div>
          <div className="word">votes</div>
        </div>
        <div className="answers">
          <div className="numeric">1</div>
          <div className="word">answers</div>
        </div>
        <div className="views">
          <div className="numeric">0</div>
          <div className="word">views</div>
        </div>
      </div>
      <div className="text-question">
        <h3>How to get job-name from job file in azkaban 3.0</h3>
        <div className="topics-in-question">
          <a className="post-tag" href="www">php</a>
          <a className="post-tag" href="www">wordpress</a>
          <a className="post-tag" href="www">post</a>
          <a className="post-tag" href="www">apprequests</a>
        </div>
        <div className="started">
          <a className="started-link" href="www">
            asked
            <span className="relativetime">1 min ago</span>
          </a>
          <a className="nickname" href="www">DaBeer</a>
          <span className="reputation">1420</span>
        </div>
      </div>
    </div>
  </div>
  <div id="sidebar">
    <div id="sidebar-work">
      <div id="top"><p>Work from anywhere</p></div>
      <div id="tt">
        <div className="work">
          <h6>Software Engineer, Web (Javascript)</h6>
          <p><span>Crossover</span><span className="location">No office location</span></p>
        </div>
        <div className="work">
          <h6>Senior Windows A/V Developer</h6>
          <p><span>Crossover</span><span className="location">No office location</span></p>
        </div>
        <div className="work">
          <h6>Software Engineer, Android</h6>
          <p><span>Crossover</span><span className="location">No office location</span></p>
        </div>
        <div className="work work-last">
          <h6>Penetration tester / Ethical hacker (Freelance - Position,
            Working from Home)</h6>
          <p><span>Crossover</span><span className="location">No office location</span></p>
        </div>
      </div>
    </div>
    <div id="hot-network-questions">
      <h3>Hot Network Questions</h3>
      <ul>
        <li><a className="hot-network-question" href="www">What happen if someone transformed via Polymorph Any Object uses an Alter Self special ability?</a></li>
        <li><a className="hot-network-question" href="www">Distributing resources for maximum gain</a></li>
        <li><a className="hot-network-question" href="www">Did Calvin ever realise that Hobbes was not real?</a></li>
        <li><a className="hot-network-question" href="www">Can Excel produce a strange but logical sequence of numbers?</a></li>
        <li><a className="hot-network-question" href="www">Count number of lines in a file with `latex3`</a></li>
        <li><a className="hot-network-question" href="www">Why is it bad to connect internal systems to the Internet?</a></li>
        <li><a className="hot-network-question" href="www">100 Day Countdown</a></li>
        <li><a className="hot-network-question" href="www">Who hired Wade to scare Jeremy (the pizza guy)?</a></li>
        <li><a className="hot-network-question" href="www">Going beyond the surreal numbers</a></li>
        <li><a className="hot-network-question" href="www">Which day of the week again?</a></li>
        <li><a className="hot-network-question" href="www">Why does Hermione lie about why she is in the bathroom when the troll attacks?</a></li>
        <li><a className="hot-network-question" href="www">Term that describes the technique in which an artist repeat lyrics from their previous work</a></li>
        <li><a className="hot-network-question" href="www">When does an encounter go from "deadly" to "instant death"?</a></li>
        <li><a className="hot-network-question" href="www">What does it mean when an interviewer is rude?</a></li>
        <li><a className="hot-network-question" href="www">Create a codeblock tool</a></li>
      </ul>
    </div>
  </div>
</div> */}

    </>
  )
}

export default Problems