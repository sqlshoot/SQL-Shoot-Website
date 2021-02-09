import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Windows() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Windows"/>
      </div>
      <div className="column content">
      <h1>Windows</h1>
        You can download the latest Windows version of SQL shoot here:
        <br />
        <br />
        <a href="https://github.com/sqlshoot/SQL-Shoot/releases">
          <button className="button is-link">Download SQL Shoot Windows command line</button>
        </a>
        <br />
        <br />
        To install, extract the <code>.zip</code> archive somewhere accessible on your machine (perhaps <code>C:\sqlshoot</code>).
        <br />
        Using a command line terminal <code>cd</code> into the extracted folder.
        <br />
        In the command line terminal, run <code>sqlshoot</code> to ensure it's working.
      </div>
    </div>
    </section>
    </Layout>
  )
}
