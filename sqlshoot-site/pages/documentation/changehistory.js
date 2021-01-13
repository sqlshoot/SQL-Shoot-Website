import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function ChangeHistory() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Change History"/>
      </div>
      <div className="column content">
        <h1>Change History</h1>
        SQL Shoot maintains a change history record in each database you deploy to.
        <br />
        <br />
        SQL Shoot automatically creates the Change History table under the <a href="/documentation/alloptions#Primary-Schema">Primary Schema</a> when you execute the <a href="/documentation/run">Run</a> command for the first time against a database.
        <br />
        <br />
        When you run the <a href="/documentation/alloptions#overview">Overview</a> command, SQL Shoot reads the Change History table to figure out the overall state of your deployment.
        <br />
        <br />
        You should never need to directly deal with the Change History table during normal usage. However it might be necessary in the case of a bug, or failed deployment. See <a href="/documentation/troubleshooting">Troubleshooting</a>.
        <br />
        <br />
        <a href="nextsteps">
          <button className="button is-link">Next: Next Steps</button>
        </a>
      </div>
    </div>
    </section>
    </Layout>
  )
}
