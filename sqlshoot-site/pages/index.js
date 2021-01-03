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
          <div className="buttons">
          <a href="/documentation/introduction">
            <button class="button is-primary">Get Started</button>
          </a>
          <a href="/documentation/introduction">
            <button class="button is-secondary">Documentation</button>
          </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">Version control your SQL scripts</h4>
              <span className="lnr lnr-big lnr-file-add"/>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
          <h4 className="title is-4">Consistent, orderly deployments</h4>
          <span className="lnr lnr-big lnr-rocket"/>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
          <h4 className="title is-4">At-a-glance change history</h4>
          <span className="lnr lnr-big lnr-history"/>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
    <div className="box has-text-centered">
      <div className="columns">
        <div className="column">
          <strong>Write scripts in plain SQL</strong>
          <br />
          <div className="lnr lnr-small lnr-pencil"/>
          <br />
          Author changes in a familiar way
        </div>
        <div className="column">
          <strong>Deploy scripts in the order your need</strong>
          <div className="lnr lnr-small lnr-sort-alpha-asc"/>
          <br />
          Orchestrate deployments to deal with dependencies between scripts
        </div>
        <div className="column">
          <strong>Command line interface</strong>
          <div className="lnr lnr-small lnr-chevron-right"/>
          Everything in a small command line tool - no complex graphical interfaces
        </div>
        <div className="column">
        <strong>Rollback support</strong>
          <div className="lnr lnr-small lnr-redo"/>
          Revert failed deployments with a single command
        </div>
      </div>
      <div className="columns">
        <div className="column">
        <strong>Works out of the box, with no dependencies</strong>    
          <div className="lnr lnr-small lnr-briefcase"/>
          Install in seconds, with a minimal footprint in your environment
        </div>
        <div className="column">
        <strong>Fits into CI/CD processes</strong>        
          <div className="lnr lnr-small lnr-train"/>
          You can automate SQL Shoot operations in any CI/CD system
        </div>
        <div className="column">
        <strong>Cross database</strong>   
          <div className="lnr lnr-small lnr-database"/>
          The same tool works with SQL Server, and SQLite, with more coming soon
        </div>
        <div className="column">
        <strong>Open source</strong> 
          <div className="lnr lnr-small lnr-code"/>
          A transparent code base you can inspect and contribute to
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
