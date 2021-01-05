import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Files() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Files"/>
      </div>
      <div className="column content">
        <h1>Files</h1>
        Configuration files are in the YAML format. SQL Shoot expects the file to be called <code>config.yaml</code>.
        <br />
        <br />
        <code>config.yaml</code> must be in the working directory of the command line call in order to be picked up. The example project you can download in Quick Start shows how that works.
        <br />
        <br />
        Command line arguments override options specified in configuration files.
        <br/>
        <br/>
        Details about each configuration option can be found in All Options.
        <h2>Example <cdde>config.yaml</cdde> file</h2>
        <pre>
          <code>
          connectionString: Data Source=.\mydb.db;Version=3;<br/>
          databaseEngine: SQLite<br/>
          username: myUser<br/>
          password: myPassword<br/>
          databaseName: myDatabase<br/>
          primarySchema: dbo<br/>
          scriptPaths:<br/>
          {"  "}- scripts/*<br/>
          {"  "}- C:/release-1/*<br/>
          {"  "}- C:/release-2/createTable.sql<br/>
          runScriptsInTransactions: true<br/>
          fake: false<br/>
          </code>
        </pre>
      </div>
    </div>
    </section>
    </Layout>
  )
}
