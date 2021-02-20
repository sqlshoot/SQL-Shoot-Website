import Layout from './layout'

export default function Home() {
  return (
    <Layout>
    <section className="hero">
      <div className="hero-body">
        <div className="container text-align-center">
          <figure className="image main-page-logo">
                <img src="sqlshoot-square.png" />
          </figure>
          <h3 className="title is-3">
            Change control for the database
          </h3>
          <h3 className="subtitle is-3">
            Version 0.2.0
          </h3>
          <br />
          </div>
          <div className="container">
            <div className="columns">
            <div className="column" />
            <div className="column">
              <div className="buttons">
              <a className="button is-large is-fullwidth is-primary" href="/documentation/introduction">
                  Get Started
              </a>
              <a className="button is-large is-fullwidth" href="/documentation/introduction">
                  Documentation
              </a>
              <a className="button is-fullwidth" href="https://colossal-builder-2480.ck.page/0425399972">
                Newsletter sign up
              </a>
              </div>
            </div>
            <div className="column" />
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
    <h3 className="title is-3 text-align-center">Features</h3>
    <h4 className="subtitle is-4 text-align-center">Get your database changes under control</h4>
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
          Orchestrate deployments, even when scripts have tricky dependencies
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
          The same tool works with SQL Server, PostgreSQL, and SQLite, with more coming soon
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
    <h3 className="title is-3 text-align-center">Supported Databases</h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <figure className="image is-128x128 client-img">
                <img src="sqlserver.png" />
              </figure>
              <a href="/documentation/sqlserver">
                <button className="button is-link">SQL Server</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <figure className="image is-128x128 client-img">
                <img src="postgres.png" />
              </figure>
              <a href="/documentation/postgresql">
                <button className="button is-link">PostgreSQL</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <figure className="image is-128x128 client-img">
                <img src="sqlite.png" />
              </figure>
              <a href="/documentation/sqlite">
                <button className="button is-link">SQLite</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">More coming soon...</h4>
              <a href="/documentation/contributing">
                <button className="button is-link">Contributing</button>
              </a>
          </div>
        </div>
      </div>
    </section>

    <hr />
    
    <section>
    <h3 className="title is-3 text-align-center">Get SQL Shoot</h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
        <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">Windows</h4>

              <figure className="image is-128x128 client-img">
                <img src="windows.png" />
              </figure>

              <a href="/documentation/windows">
                <button className="button is-link">Install for Windows</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
        <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">Linux</h4>
              
              <figure className="image is-128x128 client-img">
                <img src="linux.png" />
              </figure>

              <a href="/documentation/linux">
                <button className="button is-link">Install for Linux</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
        <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">Docker</h4>

              <figure className="image is-128x128 client-img">
                <img src="docker.png" />
              </figure>

              <a href="/documentation/docker">
                <button className="button is-link">Pull the Docker image</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">NuGet</h4>

              <figure className="image is-128x128 client-img">
                <img src="nuget.png" />
              </figure>

              <a href="/documentation/nuget">
                <button className="button is-link">Install NuGet package</button>
              </a>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">GitHub</h4>

              <figure className="image is-128x128 client-img">
                <img src="github.png" />
              </figure>

              <a href="/documentation/github">
                <button className="button is-link">See source code in GitHub</button>
              </a>
          </div>
        </div>
      </div>
    </section>
    </section>
    </Layout>
  )
}
