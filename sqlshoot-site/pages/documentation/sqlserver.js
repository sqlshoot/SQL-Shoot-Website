import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function SqlServer() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="SQL Server"/>
      </div>
      <div className="column content">
      <h1>SQL Server</h1>
      <h4>Supported versions</h4>
      <ul>
        <li>2019</li>
        <li>2017</li>
        <li>2016</li>
      </ul>
      <h4>Database connections</h4>
      <table>
        <tbody>
          <tr>
            <td>Database Engine Value</td>
            <td><a href="/documentation/alloptions#Database-Engine"><code>SQL Server</code></a></td>
          </tr>
          <tr>
            <td>Example connection string</td>
            <td><code>Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;</code></td>
          </tr>
          <tr>
            <td>Connection String Reference</td>
            <td><a href="https://www.connectionstrings.com/sql-server/">See connectionstrings.com</a></td>
          </tr>
          <tr>
            <td>Driver</td>
            <td><a href="https://docs.microsoft.com/en-us/sql/connect/ado-net/overview-sqlclient-driver?view=sql-server-ver15">Microsoft SqlClient Data Provider for SQL Server</a></td>
          </tr>
          <tr>
            <td>Driver Version</td>
            <td>2.1.1</td>
          </tr>
        </tbody>
      </table>
      <h4>Notes</h4>
      None
      <br/>
      <br/>
      <h4>Known Limitations</h4>
      None
      </div>
    </div>
    </section>
    </Layout>
  )
}
