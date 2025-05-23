import { useNavigate } from "react-router-dom"
import StyledSearchField from "@components/styled/SearchField"
import basic_search_black from "@assets/icons/basic-28-search.svg"

const SearchField = ({isHidden}) => {
  const navTo = useNavigate()

  const handleSearch = (formData) => {
    const searchFor = new URLSearchParams(formData)
    navTo(`/search?${searchFor.toString()}`)
  }
  return (
    <StyledSearchField $isHidden={isHidden} >
      <form action={handleSearch} className="w-full">
        <label className="flex sub-block align-center w-full">
          <button>
            <img src={basic_search_black} alt="" className="nav-icon" />
          </button>
          <input
            type="text"
            name="query"
            className="search-text-field fs-16 w-full"
            placeholder="Search for a movie, tv show, person..."
          />
        </label>
      </form>
    </StyledSearchField>
  )
}

export default SearchField
