import { useState } from 'react'
import PropTypes from 'prop-types'
import md5 from 'md5'
import { useNavigate } from 'react-router-dom'

export default function UserItem (props) {
  const navigate = useNavigate()
  const [isHover, setIsHover] = useState(false)
  function useLogoutTimer () {
    navigate(`/albumes/${props.userId}`)
  }
  return (
    <div
      onClick={useLogoutTimer}
      className={`mb-3 card ${isHover ? 'text-bg-primary' : ''}`}
      role="button"
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
    >
      <div className="card-body row">
        <div className="col-1">
          <img
            className="rounded-circle"
            src={`https://www.gravatar.com/avatar/${md5(
              props.email
            )}?d=identicon`}
          />
        </div>
        <div className="col-9">
          <div className="h3 mx-5">{props.name}</div>
          <div className="h4 mx-5">@{props.username}</div>
        </div>
        <div className="my-auto text-end col-2 h5">Ver álbumes</div>
      </div>
    </div>
  )
}
UserItem.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
}
