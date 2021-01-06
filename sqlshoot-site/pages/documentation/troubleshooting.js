import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Troubleshooting() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Troubleshooting"/>
      </div>
      <div className="column content">
      <h1>Troubleshooting</h1>
      If you encounter a problem, or suspect a bug with SQL Shoot, you can seek help with the following:
      <br />
      <ul>
          <li>Create an issue on the GitHub repository</li>
          <li>Contact the support email: <code>sqlshoot@protonmail.com</code></li>
          <li>Search through this documentation site for more information</li>
      </ul>
      When sending a bug report, it's usually helpful to provide clear reproduction steps, and a minimal example script if possible.
      <br />
      It's also helpful to attach any relevant stack traces, which can be produced by running with the <code>debug</code> command line option. 
      </div>
    </div>
    </section>
    </Layout>
  )
}
