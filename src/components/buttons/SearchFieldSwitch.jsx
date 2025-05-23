import basic_search_blue from "@assets/icons/basic-28-search-blue.svg"
import basic_close from "@assets/icons/basic-599-menu-close.svg"

const SearchFieldSwitch = ({ isHidden, setHidden }) => {
  const handleSwitch = () => {
    setHidden((value) => !value)
  }
  return (
    <button
      onClick={handleSwitch}
      type="button"
      className="search-field-switch"
    >
      {isHidden ? (
        <img
          src={basic_search_blue}
          alt="show search"
          className="search-field-switch-icon"
        />
      ) : (
        <img
          src={basic_close}
          alt="close-search"
          className="search-field-switch-icon invert"
        />
      )}
    </button>
  )
}

export default SearchFieldSwitch
