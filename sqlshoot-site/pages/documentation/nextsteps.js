import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function NextSteps() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Next Steps"/>
      </div>
      <div className="column content">
      <h1>Next Steps</h1>
        That's it for the introduction! Now to begin using SQL Shoot in your development process.
        <br/>
        <br/>
        You should read the documentation for the various commands, and familiarize yourself with the configuration options.
        <br />
        <br />
        Using the instructions in Quick Start, perhaps you can try deploying a few scripts to your development environment.
        <br />
        <br />
        Finally, you can check out the community page. SQL Shoot is open source, and is always on the look out for contributors.
      </div>
    </div>
    </section>
    </Layout>
  )
}
