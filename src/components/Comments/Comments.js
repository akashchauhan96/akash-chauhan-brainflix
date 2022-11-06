import './Comments.scss'
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import addComment from '../../assets/icons/add_comment.svg'

function Comments({videoDetails}) {
  // console.log(videoDetails);
  return (
    <section className="comment-section">
        <p className='comment-section__total-number'>{videoDetails.comments.length} Comments</p>
        <div className="comment-section__container">
          <div className="comment-section__image-comment-wrapper">
            <div className="comment-section__avatar-container">
              <img
                src={avatarImage}
                alt="avatar image of the person submitting comment"
                className="comment-section__avatar-image"
              />
            </div>
            <form action="#" className="comment-form" id="form">
              <div className="comment-form__comment-box">
                <label className="comment-form__comment-label">
                Join the Conversation
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  className="comment-form__comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <button type="submit" className="comment-form__button">
                <img 
                  className="comment-form__comment-icon" 
                  src={addComment}
                  alt="Add Comment Icon"
                />
                <span className="comment-form__comment-text">Comment</span>
              </button>
            </form>
          </div>
        </div>
        {/* <CommentArray /> */}
      </section>
  )
}

export default Comments