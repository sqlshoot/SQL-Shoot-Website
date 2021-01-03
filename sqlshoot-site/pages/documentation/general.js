import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function General() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="General"/>
      </div>
      <div className="column content">
        <h1>General</h1>
        SQL Shoot can be configured in two ways: Command line arguments, and configuration files.
        <br />
        Command line arguments take precedence over those specified in configuration files.
        <br />
        See the relevant pages for details.
      </div>
    </div>
    </section>
    </Layout>
  )
}
