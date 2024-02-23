import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AlbumItem (props) {
  const navigate = useNavigate()

  const [isHover, setIsHover] = useState(false)

  const handleAlbumClick = () => {
    navigate(`/fotos/${props.id}`)
  }

  return (
    <div className="col-3 mb-4">
      <div
        className={`card ${isHover ? 'text-bg-primary' : ''}`}
        role="button"
        onClick={handleAlbumClick}
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        title={props.title}
      >
        <img
          className="card-img-top"
          src={`https://picsum.photos/200/300?random=${props.id}`}
          alt={props.title}
        />
        <div className="card-body">
          <p
            className="card-text"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {props.title}
          </p>
        </div>
      </div>
    </div>
  )
}

AlbumItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
