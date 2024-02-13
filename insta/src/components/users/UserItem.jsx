import { useState } from 'react'
import PropTypes from 'prop-types'
import md5 from 'md5'

export default function UserItem (props) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
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
          <div className="h3">{props.name}</div>
          <div className="h4">@{props.username}</div>
        </div>
        <div className="my-auto text-end col-2 h5">Ver álbumes</div>
      </div>
    </div>
  )
}
UserItem.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}
