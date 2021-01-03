import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Docker() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Docker"/>
      </div>
      <div className="column content">
      <h1>Docker</h1>
        You can pull the latest Docker version of SQL shoot here:
        <br />
        <br />
        <a href="#">
          <button class="button is-link">Go to SQL Shoot DockerHub</button>
        </a>
        <br />
        <br />
        The DockerHub page has instructions on how to mount drives so SQL Shoot can pick up your files.
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
