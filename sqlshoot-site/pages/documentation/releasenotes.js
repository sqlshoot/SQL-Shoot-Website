import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function ReleaseNotes() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Release Notes"/>
      </div>
      <div className="column content">
      <h1>Release Notes</h1>
      TODO
      </div>
    </div>
    </section>
    </Layout>
  )
}
