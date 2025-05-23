import { useState, useEffect, useRef, useCallback, useContext } from "react"
import ContentLayout from "@/layouts/ContentLayout"
import ShowInfo from "@/components/ShowInfo"
import Filters from "@/components/Filters"
import LoadButton from "@/components/LoadButton"
import { LoadStateContext } from "@/components/shared/LoadStateContext"
import HoverToolLinks from "../../components/HoverToolLinks"

import { concatUrl } from "@/utils/search"

const IndexPage = () => {
  const { setFillLoadBar } = useContext(LoadStateContext)

  const [current, setCurrent] = useState(1)
  const [found, setFound] = useState([])
  const [dataIsLoaded, setDataIsLoaded] = useState(false)
  const [loads, setLoads] = useState(true)
  const [url, setUrl] = useState(
    concatUrl("/3/discover/movie", { page: current })
  )
  const observer = useRef()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFound(json)
        setDataIsLoaded(true)
      })
  }, [url])

  const loadElse = useCallback(
    async (page) => {
      if (loads) return
      setLoads(true)
      setFillLoadBar(true)
      try {
        const newUrl = new URL(url)
        newUrl.searchParams.set("page", page)
        const response = await fetch(newUrl)
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`)
        const newData = await response.json()
        if (newData?.results) {
          setFound((prev) => ({
            ...newData,
            results: [...(prev.results || []), ...newData.results],
          }))
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoads(false)
      }
    },
    [loads, url]
  )

  useEffect(() => {
    loadElse(current)
  }, [current])

  const lastElementRef = useCallback(
    (node) => {
      if (current === 1) return []
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCurrent(+found?.page + 1) // trigger loading of new data by chaging page n
        }
      })
      if (node && found?.page && found.page < found?.total_pages)
        observer.current.observe(node)
    },
    [loads]
  )

  // Load on scroll button
  const [showLoadButton, setShowLoadButton] = useState(true)
  const startLoad = () => {
    setLoads(false)
    setCurrent(2)
    setShowLoadButton(false)
    setFillLoadBar(true)
  }

  if (!dataIsLoaded) {
    return (
      <div>
        <h3>Please wait some time....</h3>
      </div>
    )
  }

  const setters = {
    setUrl,
    setCurrent,
    setFound,
    setDataIsLoaded,
    setLoads,
  }

  return (
    <main className="content">
      <div>
        <h1 className="h2 fw-semi-bold">Popular Movies</h1>
        <ContentLayout>
          {/* <!-- Sort filter sidebar --> */}
          <aside className="aside">
            <Filters url={url} setters={setters} />
          </aside>

          {/* <!-- Discover content section --> */}
          <section className="content-grid">
            {found?.results && found.results.length > 0 ? (
              <>
                {found.results.map((info, index, data) => (
                  <ShowInfo
                    key={`${current}-${info.id}`}
                    size={location.pathname.startsWith("/search")}
                    info={info}
                    ref={data.length === index + 1 ? lastElementRef : null}
                  />
                ))}
              </>
            ) : (
              <h3>No items were found that match your query.</h3>
            )}
            <LoadButton showLoadButton={showLoadButton} startLoad={startLoad} />
          </section>
        </ContentLayout>

        <HoverToolLinks />
      </div>
    </main>
  )
}
export default IndexPage
