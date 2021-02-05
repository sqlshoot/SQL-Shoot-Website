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
        SQL Shoot can be configured in two ways: Command line arguments, and YAML configuration files.
        <br />
        <br />
        Command line arguments take precedence over those specified in configuration files.
        <br />
        <br />
        See the relevant pages for details; <a href="/documentation/files">Files</a> and <a href="/documentation/commandlinearguments">Command Line Arguments</a>.
      </div>
    </div>
    </section>
    </Layout>
  )
}
