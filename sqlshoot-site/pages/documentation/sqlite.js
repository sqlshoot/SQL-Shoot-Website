import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function SQLite() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="SQLite"/>
      </div>
      <div className="column content">
      <h1>SQLite</h1>
      <h4>Supported versions</h4>
      <ul>
        <li>3.X versions from 3.9.2</li>
      </ul>
      <h4>Database connections</h4>
      <table>
        <tbody>
        <tr>
            <td>Database Engine Value</td>
            <td><a href="/documentation/alloptions#Database-Engine"><code>SQLite</code></a></td>
          </tr>
          <tr>
            <td>Example connection string</td>
            <td><code>Data Source=c:\mydb.db;Version=3;</code></td>
          </tr>
          <tr>
            <td>Connection String Reference</td>
            <td><a href="https://www.connectionstrings.com/sqlite-net-provider/">See connectionstrings.com</a></td>
          </tr>
          <tr>
            <td>Driver</td>
            <td><a href="https://docs.microsoft.com/en-gb/dotnet/standard/data/sqlite/?tabs=netcore-cli">Microsoft.Data.Sqlite</a></td>
          </tr>
          <tr>
            <td>Driver Version</td>
            <td>5.0.1</td>
          </tr>
        </tbody>
      </table>
      <h4>Notes</h4>
      None
      <br/>
      <br/>
      <h4>Known Limitations</h4>
      In memory databases aren't supported.
      </div>
    </div>
    </section>
    </Layout>
  )
}
