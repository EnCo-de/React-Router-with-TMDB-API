import React, { useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

import SearchSettings from "@/components/SearchSettings"
import ShowInfo from "@/components/ShowInfo"
import NextNav from "@components/NextNav"
import ContentLayout from "@/layouts/ContentLayout"
import basic_circle_info from "@assets/icons/basic-636-circle-info.svg"
import { concatUrl } from "@/utils/search"

const SearchPage = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [found, setFound] = useState([])
  const [dataIsLoaded, setDataIsLoaded] = useState(false)

  useEffect(() => {
    const url = concatUrl("/3/search/movie", {}, searchParams)
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFound(json)
        setDataIsLoaded(true)
      })
  }, [location])

  const current = parseInt(searchParams.get("page")) || 1
  const total = parseInt(found.total_pages ?? 1)
  const handlePageClick = (page) => {
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
    toNext(page)
  }

  if (!dataIsLoaded) {
    return (
      <div>
        <h3>Please wait some time....</h3>
      </div>
    )
  }
  return (
    <>
      <main className="content">
        <ContentLayout>
          {/* <!-- Search tabs sidebar --> */}
          <aside className="aside">
            <SearchSettings total_results={[found.total_results]} />
          </aside>
          {found.results && found.results.length > 0 ? (
            <section className="">
              {found.results.map((info) => (
                <ShowInfo
                  key={info.id}
                  size={location.pathname.startsWith("/search")}
                  info={info}
                />
              ))}
              {found.total_pages > 1 && (
                <NextNav
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  breakLabel={"..."}
                  marginPagesDisplayed={1} // Number of pages to show at the beginning and end
                  pageRangeDisplayed={5} // Number of pages to show around the current page
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  current = {current}
                  total={found.total_pages}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                />
              )}
            </section>
          ) : (
            <section className="">
              <div>
                <p>There are no movies that matched your query.</p>
              </div>
            </section>
          )}
        </ContentLayout>
      </main>
    </>
  )
}

export default SearchPage
