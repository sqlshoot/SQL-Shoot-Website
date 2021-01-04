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
    <h3 className="title is-3 text-align-center">Platforms</h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
        <div className="tile is-child box has-text-centered">
              <h4 className="title is-4">Windows</h4>

              <figure className="image is-128x128 client-img">
                <img src="windows.png" />
              </figure>

              <a href="/documentation/windows">
                <button class="button is-link">Go to Windows</button>
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
                <button class="button is-link">Go to Linux</button>
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
                <button class="button is-link">Go to Docker</button>
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
                <button class="button is-link">Source code in GitHub</button>
              </a>
          </div>
        </div>
      </div>
    </section>
    </section>
    </Layout>
  )
}
