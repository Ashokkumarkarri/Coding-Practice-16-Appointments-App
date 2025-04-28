// Write your code here

import './index.css'

const AppointmentItem = props => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const {obj, markAsFav} = props
  const {name, date, id, isFav} = obj
  const newDate = new Date(date) // convert string to Date object here!

  const startclick = () => {
    markAsFav(id)
  }

  const monthName = months[newDate.getMonth()]
  const year = newDate.getFullYear()
  const todaysDate = newDate.getDate()
  const day = days[newDate.getDay()]

  const starImg = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="bg-item-container">
      <div className="heading-div">
        <p className="item-heading">{name}</p>
        <button onClick={startclick} data-testid="star">
          <img src={starImg} alt="star" />
        </button>
      </div>
      <p>
        {' '}
        Date: {todaysDate} {monthName} {year}, {day}
      </p>
    </li>
  )
}

export default AppointmentItem
