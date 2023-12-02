// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isStarFilterActive: false,
  }

  // onTitleAlert = () => 'please enter valid Title'

  //   onDateAlert = () => 'please select Date'

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onClickFilter = () => {
    const {isStarFilterActive} = this.state
    this.setState({
      isStarFilterActive: !isStarFilterActive,
    })
  }

  // this function is been called directly when submit event occurs in form.,
  // avoided onClick attribute for this question.

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''

    // if (titleInput === '') {
    //   this.onTitleAlert()
    // }

    // if (dateInput === '') {
    //   this.onDateAlert()
    // }

    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: formattedDate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  getFilteredAppointmentsList = () => {
    const {appointmentsList, isStarFilterActive} = this.state
    if (isStarFilterActive) {
      return appointmentsList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
    }
    return appointmentsList
  }

  render() {
    const {titleInput, dateInput, isStarFilterActive} = this.state
    const filterClassName = isStarFilterActive
      ? 'active-starred-button'
      : 'inactive-starred-button'
    const filteredAppointmentsList = this.getFilteredAppointmentsList()

    return (
      <div id="bg-container">
        <div id="appointments-container">
          <div id="above-container">
            <form className="input-container" onSubmit={this.onAddAppointment}>
              <h1 className="main-heading-style">Add Appointment</h1>
              <label className="label-style" htmlFor="title">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                value={titleInput}
                className="input-item-style"
                placeholder="Title"
                onChange={this.onChangeTitleInput}
                autoComplete="OFF"
              />
              <label className="label-style" htmlFor="date">
                DATE
              </label>
              <input
                id="date"
                type="date"
                value={dateInput}
                className="input-item-style" // for this no need of placeholders
                onChange={this.onChangeDateInput}
              />
              <button
                className="Add-Button"
                type="submit" // here you have to check this, made a mistake
              >
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div id="below-container">
            <h1 className="main-heading-style">Appointments</h1>
            <button
              className={filterClassName}
              type="button"
              onClick={this.onClickFilter}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {filteredAppointmentsList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                Appointment={eachAppointment}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
