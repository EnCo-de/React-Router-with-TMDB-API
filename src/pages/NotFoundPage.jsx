import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <main className="content">
      <section>
        <h4>404 Not Found</h4>
        <p>This page does not exist</p>
        <Link to="/">Go Back</Link>
      </section>
    </main>
  )
}
export default NotFoundPage
