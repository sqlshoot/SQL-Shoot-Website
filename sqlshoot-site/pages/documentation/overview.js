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
      <div className="column content">
        <h1>Overview</h1>
        The Overview command tells you information about the state of your database, and the scripts on your filesystem.
        <br />
        It tells you:
        <ul>
            <li>Which scripts have been applied</li>
            <li>Which scripts are pending</li>
            <li>The order pending scripts will be applied</li>
            <li>Any errors with your files or deployment</li>
        </ul>
        <h3>Command Line Example</h3>
        <pre>
          <code>
          > sqlshoot overview<br />
          SQL Shoot version: 0.0.1<br />
          ┌─────────────┬────────┬─────────┬────────────┬─────────────────────┐<br />
          │ Name        │ Type   │ State   │ Revertable │ timestamp           │<br />
          ├─────────────┼────────┼─────────┼────────────┼─────────────────────┤<br />
          │ createTable │ Script │ Applied │ No         │ 12/12/2021 16:00:55 │<br />
          │ createView  │ Script │ Pending │ n/a        │                     │<br />
          │ insertData  │ Script │ Pending │ n/a        │                     │<br />
          └─────────────┴────────┴─────────┴────────────┴─────────────────────┘<br />
          </code>
        </pre>
      </div>
    </div>
    </section>
    </Layout>
  )
}
