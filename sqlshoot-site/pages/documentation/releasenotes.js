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
      You can see the release notes for all SQL Shoot versions here.
      <br />
      <br />
      All versions of the command line client can be seen on the <a href="https://github.com/sqlshoot/SQL-Shoot/releases">GitHub Releases</a> page.
      <br/>
      <br/>
      See <a href="/documentation/docker">DockerHub</a> and <a href="/documentation/nuget">Nuget.org</a> to access versions of those clients.
      <h2>0.2.0</h2>
      <ul>
        <li>Update links for website</li>
        <li>NuGet package launch</li>
      </ul>
      <h2>0.0.1</h2>
      <ul>
        <li>Initial Release</li>
      </ul>
      </div>
    </div>
    </section>
    </Layout>
  )
}
