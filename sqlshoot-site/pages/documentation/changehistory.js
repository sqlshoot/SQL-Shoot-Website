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
      <div className="column">
        SQL Shoot maintains a Change History log in each database you deploy to. This is a table inside your database, stored under the <code>primarySchema</code> (if relevant).
        <br />
        SQL Shoot automatically creates the Change History table under the <code>primarySchema</code> when you execute the Run command for the first time against a database.
        <br />
        When you run the Overview command, SQL Shoot reads the Change History table to figure out the overall state of your deployment.
        <br />
        You should never need to directly deal with the Change History table during normal usage. However it might be necessary in the case of a bug, or failed deployment. See Troubleshooting.
      </div>
    </div>
    </section>
    </Layout>
  )
}
