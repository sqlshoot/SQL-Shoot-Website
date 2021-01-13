import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function PostgreSQL() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="PostgreSQL"/>
      </div>
      <div className="column content">
      <h1>PostgreSQL</h1>
      <h4>Supported versions</h4>
      <ul>
        <li>13</li>
        <li>12</li>
        <li>11</li>
        <li>10</li>
        <li>9.6</li>
        <li>9.5</li>
      </ul>
      <h4>Database connections</h4>
      <table>
        <tbody>
        <tr>
            <td>Database Engine Value</td>
            <td><a href="/documentation/alloptions#Database-Engine"><code>PostgreSQL</code></a></td>
          </tr>
          <tr>
            <td>Example connection string</td>
            <td><code>User ID=root;Password=myPassword;Host=localhost;Port=5432;Database=myDataBase;Pooling=true;Min Pool Size=0;Max Pool Size=100;Connection Lifetime=0;</code></td>
          </tr>
          <tr>
            <td>Connection String Reference</td>
            <td><a href="https://www.connectionstrings.com/postgresql/">See connectionstrings.com</a></td>
          </tr>
          <tr>
            <td>Driver</td>
            <td><a href="http://www.npgsql.org/">Npgsql</a></td>
          </tr>
          <tr>
            <td>Driver Version</td>
            <td>5.0.1.1</td>
          </tr>
        </tbody>
      </table>
      <h4>Notes</h4>
      None
      <br/>
      <br/>
      <h4>Known Limitations</h4>
      The <code>COPY</code> command isn't supported.
      <br />
      <br />
      When creating extensions, it's recommended to use the <code>WITH SCHEMA</code> option. This will ensure that SQL Shoot <code>DROP</code>s that extension when nuking the schema.
      </div>
    </div>
    </section>
    </Layout>
  )
}
