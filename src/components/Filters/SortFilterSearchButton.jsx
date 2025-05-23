import {
  SearchStickyBtnIndicator,
  SortFilterButton,
} from "@/components/shared/Buttons.styles"

const SortFilterSearchButton = ({ disabled, stickyButtonRef, isSticky }) => {
  return (
    <SearchStickyBtnIndicator ref={stickyButtonRef}>
      <SortFilterButton disabled={disabled} $isSticky={isSticky}>
        Search
      </SortFilterButton>
    </SearchStickyBtnIndicator>
  )
}
export default SortFilterSearchButton
