import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Recover() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Recover"/>
      </div>
      <div className="column content">
        <h1>Recover</h1>
        The Recover command attempts to put your deployment into a valid state after a failed Run, or errors in your project.
        <br />
        Recover will:
        <ul>
            <li>Delete 'Failed' entries in the change history table</li>
            <li>Update checksums in the change history table to match your scripts on disk</li>
        </ul>
        <h3>Command Line Example</h3>
        <pre>
          <code>
          > sqlshoot recover<br />
          SQL Shoot version: 0.0.1<br />
          Amending checksum for change createTable<br />
          </code>
        </pre>
      </div>
    </div>
    </section>
    </Layout>
  )
}
