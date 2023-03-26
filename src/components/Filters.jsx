import { FILTERS_BUTTONS } from '../consts'
import '../sass/components/Filters.scss'

const Filters = ({ filterSelected, handleFilterSelect }) => {
  function handleClick (event) {
    event.preventDefault()
    const filter = event.target.href.split('?filter=')[1]
    handleFilterSelect(filter)
  }

  return (
    <ul className='filters-container'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = filterSelected === key
        const className = `${isSelected ? 'selected' : ''} filter`
        return (
          <li key={key}>
            <a onClick={handleClick} className={className} href={href}>{literal}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Filters
