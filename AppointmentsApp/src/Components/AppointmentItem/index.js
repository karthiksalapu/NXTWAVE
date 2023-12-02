// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {Appointment} = props
  const {id, title, date, isStarred} = Appointment
  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    const {toggleIsStarred} = props

    toggleIsStarred(id)
  }

  return (
    <li className="list-item-style">
      <div id="appointment-task-item">
        <p className="title-style">{title}</p>
        <button
          type="button"
          data-testid="star"
          className="star-icon-button"
          onClick={onClickStar}
        >
          <img src={starImage} alt="star" />
        </button>
      </div>
      <p className="date-style">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
