import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function GitHub() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="GitHub"/>
      </div>
        <div className="column content">
            <h1>GitHub</h1>
            SQL Shoot is free and open source software, under the GNU LGPL V3 license. This website is also open source.
            <br />
            <br />
            <h3>SQL Shoot</h3>
            SQL Shoot's source code is available on GitHub.
            <a href="https://github.com/sqlshoot/SQL-Shoot">
            <button className="button is-link">Go to SQL Shoot GitHub</button>
            </a>
            <h3>Website and Documentation</h3>
            This website and documentation is also available on GitHub too.
            <br />
            <br />
            <a href="https://github.com/sqlshoot/SQL-Shoot-Website">
            <button className="button is-link">Go to website GitHub</button>
            </a>
        </div>
    </div>
    </section>
    </Layout>
  )
}
