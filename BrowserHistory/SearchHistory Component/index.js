import './index.css'

const SearchHistory = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <div className="searchItem-container">
        <p className="time-text">{timeAccessed}</p>

        <img src={logoUrl} alt="domain logo" className="logo-style" />
        <p className="bold-text">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button-style"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchHistory
