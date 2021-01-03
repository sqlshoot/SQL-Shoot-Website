import Layout from '../layout'
import SidebarNav from './sidebarNav'
import ConfigurationOption from './configurationOption'

export default function AllOptions() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="All Options"/>
      </div>
      <div className="column content">
        <h1>All Options</h1>
        This page lists all configuration options for SQL Shoot.
        <br />
        <ConfigurationOption
            name={"primarySchema"}
            description={
            <p>
                Schema under SQL Shoot's control. Stores the Change History table, and is cleared by the Nuke command.
            </p>
            }
            example={"dbo"}        
        />
      </div>
    </div>
    </section>
    </Layout>
  )
}
