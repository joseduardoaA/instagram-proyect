import PropTypes from 'prop-types'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function PhotoItem(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="col-xs-12 col-md-4 col-lg-2 mb-4">
        <div
          role="button"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          <img src={props.thumbnailUrl} alt={props.title} width="100%" />
        </div>
      </div>
      {isModalOpen &&
        createPortal(
          <div className="modal">
            <h2>{props.title}</h2>
            <img src={props.url} alt={props.title} />
            <button
              type="button"
              className="mt-2 btn btn-danger"
              onClick={() => {
                setIsModalOpen(false)
              }}
            >
              Cerrar
            </button>
          </div>,
          document.getElementById('modal')
        )}
    </>
  )
}

PhotoItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
}
