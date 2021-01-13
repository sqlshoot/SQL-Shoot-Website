import Layout from '../layout'
import SidebarNav from './sidebarNav';

const basicUsageExample = `SqlShoot sqlShoot = new SqlShoot();

Configuration configuration = new Configuration
{
    ConnectionString = \"Host=localhost;Port=5432;Database=myDatabase;\",
    DatabaseEngine = \"PostgreSQL\",
    PrimarySchema = \"mySchema\",
    Username = \"myUser\",
    Password = \"myPassword\",
    ScriptPaths = {
        \"C:/myScripts/*\",
        \"C:/another/place/script.sql\"
    },
    DatabaseName = \"myDatabase\"
};

sqlShoot.SetConfiguration(configuration);

sqlShoot.Run();`;

const loggingExample = `SqlShoot sqlShoot = new SqlShoot();
sqlShoot.SetLoggerWriteLine(text => _myLogger.LogMessage(text));`

export default function NuGet() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="NuGet"/>
      </div>
      <div className="column content">
      <h1>NuGet</h1>
        You can get the SQL Shoot NuGet package here:
        <br />
        <br />
        <a href="#">
          <button className="button is-link">Go to NuGet.org</button>
        </a>
        <br />
      <h2>API Usage</h2>
      All the public members of the SQL Shoot API are documented in code. This page has some examples of usage to get started.

      <h3>Basic usage</h3>
      This example creates an instance of <code>SqlShoot</code>, configures it, and runs the scripts against the database.
      <br />
      <br />
      <pre>
        <code>
        { basicUsageExample }
        </code>
      </pre>

      <h3>Logging</h3>
      Inject a logging action to allow SQL Shoot to hook to your applications logging process.
      <br />
      <br />
      <pre>
        <code>
        {loggingExample}
        </code>
      </pre>

      <h3>More examples</h3>
      The SQL Shoot command line client is a good example of SQL Shoot API usage. You can inspect the code on GitHub.
      </div>
    </div>
    </section>
    </Layout>
  )
}
