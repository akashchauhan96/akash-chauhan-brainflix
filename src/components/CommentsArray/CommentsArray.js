import './CommentsArray.scss'

function CommentsArray({commentsList}) {
  
  console.log(commentsList);
  
  function DateGenerator(date) {
    // console.log(date);
    const newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    if (month<10) {
      month = `0${month}`;
    }
    let day = newDate.getDate();
    if (day<10) {
      day = `0${day}`;
    }
    const year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  return (
    <section className='comment-array'>
      {commentsList.map((comment) => {
        return (
          <article className='comment-array__container' key={comment.id}>
            <div className='comment-array__avatar-container'></div>
            <div className='comment-array__container-no-image'>
              <div className='comment-array__name-date-wrapper'>
                <p className='comment-array__name'>{comment.name}</p>
                <p className="comment-array__date">{DateGenerator(comment.timestamp)}</p>
              </div>
              <p className="comment-array__comment">{comment.comment}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default CommentsArray;