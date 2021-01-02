import Layout from '../layout'
import SidebarNav from './sidebarNav'
import ConfigurationOption from './configurationOption'

export default function AllOptions() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Files"/>
      </div>
      <div className="column">
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
