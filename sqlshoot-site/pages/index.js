import Layout from './layout'

export default function Home() {
  return (
    <Layout>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            SQL Shoot
          </h1>
          <h2 className="subtitle">
            Change control for the database
          </h2>
          <div class="buttons">
            <button class="button is-primary">Get Started</button>
            <button class="button is-link">Documentation</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
              Version control your SQL scripts
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
              Deploy changes in an orderly manner
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            See how the database has changed over time
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
    <div className="box">
      <div className="columns">
        <div className="column">
          Write scripts in plain SQL
        </div>
        <div className="column">
          Deploy scripts in the order your need
        </div>
        <div className="column">
          Command line interface
        </div>
        <div className="column">
          Rollback support
        </div>
      </div>
      <div className="columns">
        <div className="column">
          Works out of the box, with no dependencies
        </div>
        <div className="column">
          Fits into CI/CD processes
        </div>
        <div className="column">
          Cross database
        </div>
        <div className="column">
          Open source
        </div>
      </div>
    </div>
    <hr />
    <section>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
              Windows
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
              Linux
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            NuGet
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            GitHub
          </div>
        </div>
      </div>
    </section>
    </section>
    </Layout>
  )
}
