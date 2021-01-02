import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Sqlite() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="SQLite"/>
      </div>
      <div className="column">
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
