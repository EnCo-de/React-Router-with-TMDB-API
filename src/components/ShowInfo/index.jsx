import { forwardRef } from "react"
import { Link } from "react-router-dom"
import UserScore from "@components/UserScore.jsx"
import { structureData } from "@/utils/discover"
import { SRC_URL_1X, SRC_URL_2X } from "./constants"

const ShowInfo = forwardRef(({ size, info }, ref) => {
  const {
    id,
    title,
    other,
    overview,
    url,
    vote_count,
    release_date,
    consensus,
  } = structureData(info, true)

  return (
    <div
      className={
        "card card-style discover card-layout" + (size ? " basic-info" : "")
      }
      ref={ref}
    >
      <Link
        to={`/movie/${encodeURIComponent(`${id}-${title}`)}`}
        className="link-image"
        title={title}
      >
        <img
          loading="lazy"
          className="poster w-full"
          src={`${SRC_URL_1X}${url}`}
          srcSet={`${SRC_URL_1X}${url} 1x, ${SRC_URL_2X}${url} 2x`}
          alt={title}
        />
      </Link>
      <div
        className="dots hide-xs"
        data-id="1045938"
        data-object-id="636aa4104ca6760089a8ce01"
        data-media-type="movie"
        data-role="tooltip"
      >
        <svg className="dots-icon">
          <use href="icons/glyphicons-basic-25-circle-more-white.svg#glyphicons-basic-dots"></use>
        </svg>
      </div>
      <UserScore vote_count={vote_count} consensus={consensus} />

      <div className="info details fs-16">
        <Link
          to={`/movie/${encodeURIComponent(`${id}-${title}`)}`}
          title={title}
          className="text-black"
        >
          <h2 className="title fs-16">{title}</h2>
          {other && <p className="title2 hide-x">({other})</p>}
        </Link>
        <p className="release_date text-black-6">{release_date}</p>
        <p className="overview hide-x">{overview}</p>
      </div>
      <div className="card-hover hide-xs"></div>
    </div>
  )
})

export default ShowInfo
