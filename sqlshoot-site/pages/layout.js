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
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="/sqlshoot-rectangle.png" width="112" height="28" />
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="/">
                Home
              </a>

              <a class="navbar-item" href="/documentation">
                Documentation
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item" href="about">
                    About
                  </a>
                  <a class="navbar-item" href="contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </nav>
        
        <section class="section">
          <div class="container">
          {children}
          </div>
        </section>
      </body>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Footer
          </p>
        </div>
      </footer>
    </div>
  )
}
