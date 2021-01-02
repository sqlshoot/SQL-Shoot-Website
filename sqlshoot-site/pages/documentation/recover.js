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
      <div className="column">
        The Recover command attempts to put your deployment into a valid state after a failed Run, or errors in your project.
        <br />
        Recover will:
        <ul>
            <li>Delete 'Failed' entries in the change history table</li>
            <li>Update checksums in the change history table to match your scripts on disk</li>
        </ul>
        <br />
        <code>sqlshoot recover</code>
        <br />
        Output:
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
