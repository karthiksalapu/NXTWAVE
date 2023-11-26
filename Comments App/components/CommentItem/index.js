// Write your code here

import {formatDistanceToNow} from 'date-fns'
import './index.css'
// import {COMMENT} from 'postcss-selector-parser'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likedTextClassName = isLiked ? 'liked-text' : 'disliked-text'
  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-container">
      <div className="comment-details-container">
        <div className={initialClassName}>
          <p>{initial}</p>
        </div>
        <div>
          <div className="name_time_container">
            <h1 className="user-name">{name}</h1>
            <p className="time-indicator">{postedTime}</p>
          </div>
          <p className="user-comment-text">{comment}</p>
        </div>
      </div>
      <div className="comment-like-del-container">
        <div className="like-div">
          <img src={likedImageUrl} alt="like" className="like-image-style" />
          <button
            className={likedTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="delete-image-style"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image-style"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
