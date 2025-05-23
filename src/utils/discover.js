/** Destructure with
 *  {
 *    id,
 *    title,
 *    other,
 *    overview,
 *    url,
 *    vote_count,
 *    release_date,
 *    fullDate,
 *    year,
 *    consensus,
 *  }
 */
export const structureData = (dataObject) => {
  const consensus = Math.round(dataObject.vote_average * 10)
  const releaseDate = new Date(dataObject.release_date)
  const month = (releaseDate.getMonth() + 1).toString().padStart(2, "0")
  const day = releaseDate.getDate().toString().padStart(2, "0")
  const year = releaseDate.getFullYear()
  const fullDate = `${month}/${day}/${year}`
  const release_date = releaseDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
  return {
    id: dataObject.id,
    title: dataObject.title,
    other:
      dataObject.original_language === "en" ||
      dataObject.original_title === dataObject.title
        ? null
        : dataObject.original_title,
    overview: dataObject.overview,
    url: dataObject.poster_path,
    vote_count: dataObject.vote_count,
    release_date,
    fullDate,
    year,
    consensus,
  }
}
