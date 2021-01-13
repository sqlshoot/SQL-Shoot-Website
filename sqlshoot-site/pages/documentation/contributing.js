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
      <br />
      If you would like to contribute, read through the readme on the GitHub repository, and create a Pull Request with your code.
      <br />
      <br />
      You'll need to sign the SQL Shoot Contributor License Agreement for your code to be merged.
      <h2>New database support</h2>
      We especially welcome contributions in the way of new database support.
      <br />
      <br />
      See the Contributing Readme in GitHub for more information.
      </div>
    </div>
    </section>
    </Layout>
  )
}
