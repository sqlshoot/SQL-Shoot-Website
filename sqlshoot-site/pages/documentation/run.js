import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Run() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Run"/>
      </div>
      <div className="column content">
        <h1>Run</h1>
        The Run command executes scripts against your database, in the order described in Ordering & Dependencies.
        <h3>Command Line Example</h3>
        <pre>
          <code>
          > sqlshoot run<br />
          SQL Shoot version: 0.0.1<br />
          Creating change history store<br />
          Running script createTable<br />
          </code>
        </pre>
      </div>
    </div>
    </section>
    </Layout>
  )
}
