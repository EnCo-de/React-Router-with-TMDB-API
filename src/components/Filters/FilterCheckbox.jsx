const FilterCheckbox = ({ cat, selected, dispatch }) => {
  const handleClickFilter = (event) => {
    dispatch({
      type: selected ? "deselect" : "select",
      value: event.target.dataset.value,
    })
  }

  return (
    <li
      key={cat.value}
      data-value={cat.value}
      className={selected ? "selected" : ""}
      onClick={handleClickFilter}
    >
      {cat.text}
    </li>
  )
}
export default FilterCheckbox
