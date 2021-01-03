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
        Command Line Example:
        <br />
        <code>sqlshoot run</code>
        <br />
        Output:
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
