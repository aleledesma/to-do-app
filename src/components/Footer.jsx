import Filters from './Filters'
import '../sass/components/Footer.scss'

const Footer = ({ activesTodos, filterSelected, handleFilterSelect, handleRemoveCompleted }) => {
  function handleClick () {
    handleRemoveCompleted()
  }

  return (
    <footer className='todos-footer'>
      <span className='actives-count'>
        <strong>{activesTodos}</strong>
        item left
      </span>
      <Filters filterSelected={filterSelected} handleFilterSelect={handleFilterSelect} />
      <button onClick={handleClick} className='button-clear-completed'>Clear completed</button>
    </footer>
  )
}

export default Footer
