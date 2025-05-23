import { NextNavWrapper } from "./styles"
import NextNavLink from "./NextNavLink"

const NextNav = ({
  previousLabel = "Previous",
  nextLabel = "Next",
  breakLabel = "...",
  breakClassName = "break-dots",
  marginPagesDisplayed = 1, // Number of pages to show at the beginning and end
  pageRangeDisplayed = 2, // Number of pages to show around the current page
  onPageChange = { handlePageClick },
  containerClassName = "pagination",
  activeClassName = "active",
  total = 1,
  searchParams,
  setSearchParams,
}) => {
  const current = parseInt(searchParams.get("page")) || 1

  const toNext = (which = null) => {
    const query = Object.fromEntries(searchParams.entries())
    if (!which) {
      setSearchParams({ ...query, page: current + 1 })
    } else if (which > 0 && which <= total) {
      setSearchParams({ ...query, page: which })
    } else if (which < 0 && current > 1) {
      setSearchParams({ ...query, page: current - 1 })
    }
  }

  return (
    <>
      <NextNavWrapper>
        <ul>
          {Array(7).map((label, index) => (
            <NextNavLink key={"li" + index} active={current === index + 1}>
              {index + 1}
            </NextNavLink>
          ))}
        </ul>
      </NextNavWrapper>
      <div className="pagination_wrapper">
        <nav className="pagy next-nav" aria-label="Pages">
          <button
            className="next-nav"
            onClick={() => toNext(-1)}
            disabled={current <= 1}
            role="link"
            aria-disabled="true"
            aria-label="Previous"
          >
            ← Previous
          </button>
          {current > 4 && (
            <>
              <button key={1} className="next-nav" onClick={() => toNext(1)}>
                {1}
              </button>{" "}
              <span className="next-nav-dots" aria-disabled="true">
                …
              </span>
            </>
          )}
          {[...Array(Math.min(total, 5))].map((_, index) => {
            const nextN =
              index +
              Math.max(
                Math.min(current - 2, current - 4 + (total - current)),
                1
              )
            return nextN === current ? (
              <button
                role="link"
                aria-disabled="true"
                aria-current="page"
                className="current next-nav"
                key={nextN}
                disabled
              >
                {nextN}
              </button>
            ) : (
              <button
                key={nextN}
                className="next-nav"
                onClick={() => toNext(nextN)}
              >
                {nextN}
              </button>
            )
          })}
          {total - current > 3 && (
            <>
              <span className="next-nav-dots" aria-disabled="true">
                …
              </span>
              <button
                key={total}
                className="next-nav"
                onClick={() => toNext(total)}
              >
                {total}
              </button>
            </>
          )}
          <button
            className="next-nav"
            onClick={() => toNext()}
            disabled={current >= total}
            aria-label="Next"
          >
            Next →
          </button>
        </nav>
      </div>
    </>
  )
}
export default NextNav
