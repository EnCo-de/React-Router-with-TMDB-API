import { useEffect } from "react"
import FilterCheckbox from "@/components/Filters/FilterCheckbox"
import { FILTER_CATS } from "./constants"

const FilterCheckboxes = ({ state, dispatch, isFilterSelected }) => {
  useEffect(() => {
    if (!isFilterSelected) {
      dispatch({
        type: "filter",
      })
    }
  }, [isFilterSelected, dispatch])

  return (
    <>
      <ul
        id="with_genres"
        className="checkbox-filter-container multi_select text fs-16"
      >
        {FILTER_CATS.map((cat) => (
          <FilterCheckbox
            key={cat.value + cat.text}
            cat={cat}
            selected={state.filters.includes(cat.value)}
            dispatch={dispatch}
          />
        ))}
      </ul>
      <input
        type="hidden"
        className="filters-input"
        name="with_genres"
        value={state.filters}
      />
    </>
  )
}
export default FilterCheckboxes
