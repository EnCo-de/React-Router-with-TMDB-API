import { useCallback, useState, useReducer, useRef, useEffect } from "react"

import x_close_icon from "@assets/icons/x-close.svg"
import FilterCheckboxes from "@components/Filters/FilterCheckboxes"
import { RangeSlider } from "@/components/Filters/RangeSlider"
import SortFilterSearchButton from "@components/Filters/SortFilterSearchButton"
import CalendarSelect from "@/components/Filters/CalendarSelect"
import { SORT_OPTIONS } from "./constants"

const Filters = ({ url, setters }) => {
  // SortFilterSearchButton handle
  const [isSticky, setIsSticky] = useState(false)
  const stickyButtonRef = useRef()
  const handleIntersection = useCallback(
    (entries) => {
      setIsSticky(!entries[0]?.isIntersecting)
    },
    [setIsSticky]
  )

  useEffect(() => {
    const tracker = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    })

    if (stickyButtonRef.current) {
      tracker.observe(stickyButtonRef.current)
    }

    return () => tracker.disconnect()
  }, [])

  // handle Sort Filter
  const [state, dispatch] = useReducer(reducer, {
    filters: "",
    isSortSelected: false,
  })

  function reducer(values, action) {
    const valueSet = new Set(
      values.filters.length === 0 ? [] : values.filters.split(",")
    )
    switch (action.type) {
      case "select": {
        valueSet.add(action.value)
        return { ...values, filters: Array.from(valueSet).toString() }
      }
      case "deselect": {
        valueSet.delete(action.value)
        return { ...values, filters: Array.from(valueSet).toString() }
      }
      case "filter": {
        return {
          filters: "",
          isSortSelected: false,
        }
      }
      case "selectsort": {
        return {
          ...values,
          isSortSelected: true,
        }
      }
      default: {
        break
      }
    }
  }

  const handleSortFilter = (sortFilterData) => {
    const newUrl = new URL(url)

    // 1. Extract query string from URL
    const queryStr = new URLSearchParams(newUrl.search)

    // 2. Join them (formData will overwrite existing keys if duplicated)
    for (const [key, value] of sortFilterData.entries()) {
      queryStr.set(key, value)
    }
    newUrl.search = new URLSearchParams(queryStr).toString()
    setters.setUrl(newUrl)
    setters.setCurrent(1)
    setters.setFound([])
    setters.setDataIsLoaded(false)
    setters.setLoads(true)
    dispatch({ type: "filter" })
  }

  const isFilterSelected = () => state.filters.length > 0

  return (
    <form action={handleSortFilter} className="sort-filter-form">
      <details className="filter_panel card">
        <summary className="fw-semi-bold flex space-between align-center">
          Sort
        </summary>
        <div className="filter__div">
          <h3 className="h3">Sort Results By</h3>
          <select
            name="sort_by"
            className="sort__select w-full source-sans kendo_dropdown font_size_1"
            data-role="dropdownlist"
            defaultValue="popularity.desc"
            onChange={() => dispatch({ type: "selectsort" })}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </details>

      <details className="filter_panel card" open={window.innerWidth > 576}>
        <summary className="fw-semi-bold flex space-between align-center">
          Filters
        </summary>

        <div className="filter__div">
          <h3 className="h3">Genres</h3>
          <FilterCheckboxes
            state={state}
            dispatch={dispatch}
            isFilterSelected={isFilterSelected() && state.isSortSelected}
          />
        </div>

        <div className="filter__div">
          <h3 className="h3">Release Dates</h3>
          <CalendarSelect />
        </div>

        <div className="filter__div">
          <h3 className="h3">User Score</h3>
          <RangeSlider />
        </div>

        <div className="filter__div">
          <h3 className="h3">Minimum User Votes</h3>
          <RangeSlider by={50} scale={500} />
        </div>

        <div className="filter__div">
          <h3 className="h3">Runtime</h3>
          <RangeSlider by={15} scale={400} />
        </div>

        {/* <!-- Keywords subsection --> */}

        <div className="filter__div">
          <h3 className="h3">Keywords</h3>

          <div className="select-container">
            <div className="custom-select">
              <div className="select-box flex space-between">
                <input
                  type="text"
                  className="tags-input"
                  name="with_keywords"
                  hidden
                  defaultValue=""
                />

                <div className="selected-options-container flex wrap space-between">
                  <div className="selected-options flex wrap"> </div>
                  <input
                    type="text"
                    className="search-tags fs-14"
                    placeholder="Filter by keywords..."
                  />
                </div>
                <button type="button" className="clear">
                  <img src={x_close_icon} alt="" className="deselect" />
                </button>
              </div>

              <div className="options select-field">
                <div className="no-data hidden">No data found.</div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <SortFilterSearchButton
        disabled={!isFilterSelected() && !state.isSortSelected}
        stickyButtonRef={stickyButtonRef}
        isSticky={isSticky}
      />
    </form>
  )
}
export default Filters
