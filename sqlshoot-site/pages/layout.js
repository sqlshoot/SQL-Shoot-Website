import Head from 'next/head'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>SQL Shoot</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />
      </Head>

      <body>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="/sqlshoot-rectangle.png" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>

              <a className="navbar-item" href="/documentation">
                Documentation
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="about">
                    About
                  </a>
                  <a className="navbar-item" href="contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </nav>
        
        <section className="section">
          <div className="container">
          {children}
          </div>
        </section>
      </body>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Footer
          </p>
        </div>
      </footer>
    </div>
  )
}
