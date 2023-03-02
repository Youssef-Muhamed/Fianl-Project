import React from 'react'
import './Style.css'
import upvote from '../../../assets/sort-up.svg'
import downvote from '../../../assets/sort-down.svg'
function SingleProblem() {
  return (
    <>
        <div className='container'>
        <div className="question-details-page">
      <>
        {
          // questionsList.data.filter(question => question._id === id).map(question => (
          <div>
            <section className="question-details-container">
              <h1>i have problem</h1>
              <div className="question-details-container-2">
                <div className="question-votes">
                  <img src={upvote} alt="" width='18' className='votes-icon'/>
                  <p>7</p>
                  <img src={downvote} alt="" width='18' className='votes-icon' />
                </div>
                <div style={{ width: "100%" }}>
                  <p className="question-body">I have problems loremloremloremloremloremloremloremloremlorem</p>
                  <div className="question-details-tags">
                    <p>html</p>
                  </div>
                  <div className="question-actions-user">
                    <div>
                      <button type="button">Share</button>
                      <button type="button">Delete</button>
                    </div>
                    <div>
                      <p>asked 10-10-2022</p>
                      <a className="user-link" style={{ color: "#0086d8" }}>
                        {/* <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar> */}
                        <div>youssef</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                {/* {
        question.answer.map((ans)=>( */}
                <div className="display-ans">
                  <p>this is solution</p>
                  <div className="question-actions-user">
                    <div>
                      <button type="button">Share</button>
                      <button type="button">Delete</button>
                     
                    </div>
                    <div>
                      <p>answered 10-10-2022</p>
                      <a className='user-link' style={{color:'#0086d8'}}>
                      <div>youssef</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            <section className="post-ans-container my-3">
              <h3 className='my-2'>Your Answer</h3>
              <form>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />
                <input
                  type="Submit"
                  className="post-ans-btn"
                  value="Post Your Answer"
                ></input>
              </form>
              <p>
                {/* Browse other Question tagged
                            {
                                question.questionTags.map((tag) => (
                                    <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                ))
                            } or  */}
                {/* <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> Ask your own question.</Link> */}
              </p>
            </section>
          </div>
          // ))
        }
      </>
    </div>
        </div>
    </>
  )
}

export default SingleProblem