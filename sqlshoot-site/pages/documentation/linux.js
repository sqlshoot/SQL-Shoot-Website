import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Linux() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Linux"/>
      </div>
      <div className="column content">
      <h1>Linux</h1>
        You can download the latest Linux version of SQL shoot here:
        <br />
        <br />
        <a href="#">
          <button class="button is-link">Download SQL Shoot Linux command line</button>
        </a>
        <br />
        <br />
        To install, extract the <code>.tar.gz</code> archive somewhere accessible on your machine (perhaps <code>\usr\sqlshoot</code>).
        <br />
        Using a command line terminal <code>cd</code> into the extracted folder.
        <br />
        You may need to <code>chmod</code> execution permissions to the <code>sqlshoot</code> file.
        <br />
        In the command line terminal, run <code>sqlshoot</code> to ensure it's working.
      </div>
    </div>
    </section>
    </Layout>
  )
}
