import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function SqlServer() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="SQL Server"/>
      </div>
      <div className="column content">
      <h1>SQL Server</h1>
      Example connection string:
      <br />
      Driver:
      <br />
      Notes:
      <br />
      Known limitations:
      </div>
    </div>
    </section>
    </Layout>
  )
}
