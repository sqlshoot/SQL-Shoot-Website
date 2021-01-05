import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function NuGet() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="NuGet"/>
      </div>
      <div className="column content">
      <h1>NuGet</h1>
        You can get the SQL Shoot NuGet package here:
        <br />
        <br />
        <a href="#">
          <button class="button is-link">Go to NuGet.org</button>
        </a>
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
