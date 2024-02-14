import { useState } from 'react'
import PropTypes from 'prop-types'

export default function SearchForm (props) {
  const [value, setValue] = useState('')
  const handleValueChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit(value)
  }

  return (
    <form className="row mb-5" onSubmit={handleSubmit}>
      <div className="col-11">
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Buscar por nombre o usuario"
          onChange={handleValueChange}
          value={value}
        />
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
