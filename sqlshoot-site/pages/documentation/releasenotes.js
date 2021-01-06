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
      You can see the release history, and download previous versions of SQL Shoot here.
      <br/>
      <br/>
      See <a href="#">DockerHub</a> and <a href="#">Nuget.org</a> to access versions of those clients.

      <h2>0.1.0</h2>
      <a href="#">Download 0.1.0 Windows CLI</a> | <a href="#">Download 0.1.0 Linux CLI</a>
      <ul>
        <li>Initial Release</li>
      </ul>
      </div>
    </div>
    </section>
    </Layout>
  )
}
