import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Nuke() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Nuke"/>
      </div>
      <div className="column content">
        <h1>Nuke</h1>
        The Nuke command deletes all objects under the schema specified in `primarySchema`. This is a destructive process and should only be used when you know it's safe to do so.
        <h3>Command Line Example</h3>
        <pre>
          <code>
          sqlshoot nuke<br />
          SQL Shoot version: 0.0.1<br />
          Nuking database<br />
          </code>
        </pre>
      </div>
    </div>
    </section>
    </Layout>
  )
}
