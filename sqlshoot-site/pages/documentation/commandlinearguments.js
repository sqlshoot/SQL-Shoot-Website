import Layout from '../layout'
import SidebarNav from './sidebarNav'
import ConfigurationOption from './configurationOption'

export default function AllOptions() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Command line arguments"/>
      </div>
      <div className="column content">
        <h1>Command line arguments</h1>
        This page lists the command line specific options for SQL Shoot. See All Options for details of the main options.
        <br />
        <ConfigurationOption
            name={"debug"}
            description={
            <p>
                Whether to output extra information for debugging.
            </p>
            }
            example={"--debug=true"}        
        />
      </div>
    </div>
    </section>
    </Layout>
  )
}
