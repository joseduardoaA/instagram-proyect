import { useState } from 'react'
import PropTypes from 'prop-types'

export default function SearchForm (props) {
  const [value, setValue] = useState('')
  const handleValueChange = (event) => {
    setValue(event.target.value)
  }
  const handleClearInput = () => {
    const newValue = ''
    setValue(newValue)
    props.onSubmit(newValue)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit(value)
  }

  return (
    <form className="row mb-5" onSubmit={handleSubmit}>
      <div className="col-11">
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar por nombre o usuario"
            onChange={handleValueChange}
            value={value}
          />
          {value
            ? (
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleClearInput}
            >
              <i className="bi bi-x-lg"></i>
            </button>
              )
            : null}
        </div>
      </div>
      <div className="col-1 d-grid">
        <button className="btn btn-primary btn-lg" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

// /users/albumes/id
