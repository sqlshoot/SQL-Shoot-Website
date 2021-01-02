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
      <div className="column">
        The Nuke command deletes all objects under the schema specified in `primarySchema`. This is a destructive process and should only be used when you know it's safe to do so.
        Command Line Example:
        <br />
        <code>sqlshoot nuke</code>
        <br />
        Output:
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
