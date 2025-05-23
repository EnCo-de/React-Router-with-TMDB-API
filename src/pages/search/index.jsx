import React, { useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

import ShowInfo from "@/components/ShowInfo"
import NextNav from "@components/NextNav"
import ContentLayout from "@/layouts/ContentLayout"
import basic_circle_info from "@assets/icons/basic-636-circle-info.svg"
import { concatUrl } from "@/utils/search"

// ToDo
import "./SearchPage.css"

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

  if (!dataIsLoaded) {
    return (
      <div>
        <h3>Please wait some time....</h3>
      </div>
    )
  } else if (!found.results || found.results.length === 0) {
    return (
      <>
        <main className="content">
          <ContentLayout>
            {/* <!-- Sort filter sidebar --> */}
            <aside className="aside">
              <div className="filter_panel"></div>
              <div className="grey_column">
                <div className="settings_panel no_margin">
                  <h3 className="background_color light_blue">
                    Search Results
                  </h3>
                  <div id="search_menu_scroller" className="">
                    <ul className="settings panel with_counts scroller">
                      <li className="selected">
                        {/*  // ToDo delete href */}
                        <a
                          id="movie"
                          href="/search/movie?query=Iron Man"
                          className="search_tab active"
                          title="Movies"
                          alt="Movies"
                        >
                          Movies
                        </a>
                        <span>0</span>
                      </li>
                      <li className="">
                        <a
                          id="tv"
                          href="/search/tv?query=Iron Man"
                          className="search_tab "
                          title="TV Shows"
                          alt="TV Shows"
                        >
                          TV Shows
                        </a>
                        <span>0</span>
                      </li>
                      <li className="">
                        <a
                          id="person"
                          href="/search/person?query=Iron Man"
                          className="search_tab "
                          title="People"
                          alt="People"
                        >
                          People
                        </a>
                        <span>0</span>
                      </li>
                      <li className="">
                        <a
                          id="collection"
                          href="/search/collection?query=Iron Man"
                          className="search_tab "
                          title="Collections"
                          alt="Collections"
                        >
                          Collections
                        </a>
                        <span>0</span>
                      </li>
                      <li className="">
                        <a
                          id="keyword"
                          href="/search/keyword?query=Iron Man"
                          className="search_tab "
                          title="Keywords"
                          alt="Keywords"
                        >
                          Keywords
                        </a>
                        <span>0</span>
                      </li>
                      <li className="">
                        <a
                          id="company"
                          href="/search/company?query=Iron Man"
                          className="search_tab "
                          title="Companies"
                          alt="Companies"
                        >
                          Companies
                        </a>
                        <span>0</span>
                      </li>
                      <li className="">
                        <a
                          id="network"
                          href="/search/network?query=Iron Man"
                          className="search_tab "
                          title="Networks"
                          alt="Networks"
                        >
                          Networks
                        </a>
                        <span>0</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="search_tip">
                  <img
                    src={basic_circle_info}
                    className="nav-icon"
                    alt="basic_circle_info"
                  />{" "}
                  Tip: You can use the 'y:' filter to narrow your results by
                  year. Example: 'star wars y:1977'.
                </p>
              </div>
            </aside>
            <section className="">
              <div>
                <p>There are no movies that matched your query.</p>
              </div>
            </section>
          </ContentLayout>
        </main>
      </>
    )
  }

  return (
    <>
      <main className="content">
        <ContentLayout>
          {/* <!-- Sort filter sidebar --> */}
          <aside className="aside">
            <div className="filter_panel"></div>
            <div className="grey_column">
              <div className="settings_panel no_margin">
                <h3 className="background_color light_blue">Search Results</h3>
                <div id="search_menu_scroller" className="">
                  <ul className="settings panel with_counts scroller">
                    <li className="selected">
                      <a
                        id="movie"
                        href="/search/movie?query=Iron Man"
                        className="search_tab active"
                        title="Movies"
                        alt="Movies"
                      >
                        Movies
                      </a>
                      <span>{found.total_results}</span>
                    </li>
                    <li className="">
                      <a
                        id="tv"
                        href="/search/tv?query=Iron Man"
                        className="search_tab "
                        title="TV Shows"
                        alt="TV Shows"
                      >
                        TV Shows
                      </a>
                      <span>20</span>
                    </li>
                    <li className="">
                      <a
                        id="person"
                        href="/search/person?query=Iron Man"
                        className="search_tab "
                        title="People"
                        alt="People"
                      >
                        People
                      </a>
                      <span>16</span>
                    </li>
                    <li className="">
                      <a
                        id="collection"
                        href="/search/collection?query=Iron Man"
                        className="search_tab "
                        title="Collections"
                        alt="Collections"
                      >
                        Collections
                      </a>
                      <span>4</span>
                    </li>
                    <li className="">
                      <a
                        id="keyword"
                        href="/search/keyword?query=Iron Man"
                        className="search_tab "
                        title="Keywords"
                        alt="Keywords"
                      >
                        Keywords
                      </a>
                      <span>1</span>
                    </li>
                    <li className="">
                      <a
                        id="company"
                        href="/search/company?query=Iron Man"
                        className="search_tab "
                        title="Companies"
                        alt="Companies"
                      >
                        Companies
                      </a>
                      <span>0</span>
                    </li>
                    <li className="">
                      <a
                        id="network"
                        href="/search/network?query=Iron Man"
                        className="search_tab "
                        title="Networks"
                        alt="Networks"
                      >
                        Networks
                      </a>
                      <span>0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="search_tip">
                <img
                  src={basic_circle_info}
                  className="nav-icon"
                  alt="basic_circle_info"
                />{" "}
                Tip: You can use the 'y:' filter to narrow your results by year.
                Example: 'star wars y:1977'.
              </p>
            </div>
          </aside>
          <section className="">
            {found.results.map((info) => (
              <ShowInfo
                key={info.id}
                size={location.pathname.startsWith("/search")}
                info={info}
              />
            ))}
            <NextNav
              total={found.total_pages}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </section>
        </ContentLayout>
      </main>
    </>
  )
}

export default SearchPage
