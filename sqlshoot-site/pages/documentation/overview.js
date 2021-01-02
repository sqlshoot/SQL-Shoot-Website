import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Overview() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Overview"/>
      </div>
      <div className="column">
        The Overview command tells you information about the state of your database, and the scripts on your filesystem.
        <br />
        It tells you:
        <ul>
            <li>Which scripts have been applied</li>
            <li>Which scripts are pending</li>
            <li>The order pending scripts will be applied</li>
            <li>Any errors with your files or deployment</li>
        </ul>
        <br />
        Command Line Example:
        <br />
        <code>sqlshoot overview</code>
        <br />
        Output:
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
