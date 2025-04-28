// Write your code here
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    initialList: [],
    name: '',
    date: '',
    isStar: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {initialList, name, date} = this.state
    const newlistItem = {
      id: uuidv4(),
      name,
      date,
      isFav: false,
    }

    this.setState(prevState => ({
      initialList: [...prevState.initialList, newlistItem],
      name: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    const val = event.target.value
    this.setState({name: val})
  }

  onChangeDate = event => {
    const strDate = event.target.value

    this.setState({date: strDate})
  }

  markAsFav = id => {
    const {initialList} = this.state

    const newItem = initialList.map(i => {
      if (i.id === id) {
        return {...i, isFav: !i.isFav}
      }
      return i
    })
    this.setState({initialList: newItem})
  }

  filterStared = () => {
    this.setState(prevState => ({
      isStar: !prevState.isStar,
    }))
  }

  render() {
    const {initialList, isStar, date, name} = this.state
    const btnStyle = isStar ? 'starred-button-on' : 'starred-button-off'
    const appointListToShow = isStar
      ? initialList.filter(i => i.isFav === true)
      : initialList

    return (
      <div className="bg-container">
        <div className="card">
          <div className="Appointment-div">
            <form
              className="Appointment-input-div"
              onSubmit={this.onAddAppointment}
            >
              <h2>Add Appointment</h2>

              <label className="block" htmlFor="id-title">
                {' '}
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                type="text"
                value={name}
                className="input-el"
                id="id-title"
                placeholder="Title"
              />
              <label className="block" htmlFor="id-date">
                {' '}
                DATE
              </label>
              <input
                type="date"
                value={date}
                className="input-el"
                id="id-date"
                onChange={this.onChangeDate}
              />
              <button type="submit" className="block add-button">
                Add
              </button>
            </form>
            <div className="Appointment-img-div">
              <img
                className="Appointment-img"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <hr />
          <div className="bottom-bg-card">
            <div className="card-inside-div-1">
              <h2>Appointments</h2>
              <button className={btnStyle} onClick={this.filterStared}>
                Starred
              </button>
            </div>
            <ul>
              {appointListToShow.map(i => (
                <AppointmentItem
                  obj={i}
                  key={i.id}
                  markAsFav={this.markAsFav}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
