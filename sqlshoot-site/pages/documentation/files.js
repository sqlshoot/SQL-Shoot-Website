import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Files() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Files"/>
      </div>
      <div className="column">
        Configuration files are in the YAML format. SQL Shoot expects the file to be called <code>config.yaml</code>.
        <br />
        <code>config.yaml</code> must be in the working directory of the command line call in order to be picked up. The example project you can download in Quickstart shows how that works.
        <br />
        Example:
        <code>
            connectionString: foo
            
        </code>
      </div>
    </div>
    </section>
    </Layout>
  )
}
