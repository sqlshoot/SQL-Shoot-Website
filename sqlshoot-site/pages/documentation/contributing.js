import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Contributing() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Contributing"/>
      </div>
      <div className="column content">
      <h1>Contributing</h1>
      SQL Shoot is an open source tool, and welcomes contributions.
      <br />
      If you would like to contribute, read through the readme on the GitHub repository, and create a Pull Request with your code.
      </div>
    </div>
    </section>
    </Layout>
  )
}
