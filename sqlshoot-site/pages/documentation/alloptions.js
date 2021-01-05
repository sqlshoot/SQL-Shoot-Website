import Layout from '../layout'
import SidebarNav from './sidebarNav'
import ConfigurationOption from './configurationOption'

export default function AllOptions() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="All Options"/>
      </div>
      <div className="column content">
        <h1>All Options</h1>
        This page lists all configuration options for SQL Shoot.
        <hr />
        <ConfigurationOption
            name={"Connection String"}
            description={
            <p>
                The connection string to your database.
                <br />
                Details about the format and possible options are detailed under the documentation pages for each supported database.
            </p>
            }
            exampleValue={"Data Source=.\SqlShootDb.db;Version=3;"}
            commandLineExample={"--connectionString=Data Source=.\SqlShootDb.db;Version=3;"}
        />
        <ConfigurationOption
            name={"Database Engine"}
            description={
            <p>
                The database engine.
                <br />
                Supported values:
                <ul>
                  <li><code>SQLite</code></li>
                  <li><code>SQL Server</code></li>
                </ul>
            </p>
            }
            exampleValue={"SQLite"}
            commandLineExample={"--databaseEngine=SQLite"}
        />
        <ConfigurationOption
            name={"Username"}
            description={
            <p>
                Username for authentication. If an equivalent is supplied in the connection string, this is ignored.
            </p>
            }
            exampleValue={"myUser"}
            commandLineExample={"--username=myUser"}      
        />
        <ConfigurationOption
            name={"Password"}
            description={
            <p>
                Password for authentication. If an equivalent is supplied in the connection string, this is ignored.
            </p>
            }
            exampleValue={"myPassword"}
            commandLineExample={"--password=myPassword"}  
        />
        <ConfigurationOption
            name={"Database Name"}
            description={
            <p>
                The name of the database to connect to.
            </p>
            }
            exampleValue={"myDatabase"}
            commandLineExample={"--databaseName=myDatabase"}
        />
        <ConfigurationOption
            name={"Primary Schema"}
            description={
            <p>
                Schema under SQL Shoot's control. Stores the Change History table, and is cleared by the Nuke command.
                <br />
                Some databases don't have a concept of a 'schema' per se (such as SQLite). In such cases this option is ignored.
            </p>
            }
            exampleValue={"dbo"}
            commandLineExample={"--primarySchema=dbo"}
        />
        <ConfigurationOption
            name={"Script Paths"}
            description={
            <p>
                Paths where SQL Shoot will look for scripts on your filesystem. Paths are searched in the order specified.
                <br />
                Script paths can be either a directory, or a direct filepath.
                <br />
                Directory script paths are suffixed with a <code>*</code>. Such paths will recursively search for scripts, ordering according to Ordering & Dependencies.
                <br />
                Direct script paths point directly to a <code>.sql</code> file.
                <br />
                Script paths can either be absolute, or relative. Relative script paths are resolved from the executing directory in the command line.
                <br />
                Script paths must resolve files with unique names.
                <br />
                Multiple script paths cannot resolve the same files.
                <br />
                For instance, <code>C:/release-1/*</code> and <code>C:/release-1/createTable.sql</code> is not allowed because they both resolve to <code>createTable.sql</code>.
                <br />
            </p>
            }
            exampleValue={"C:/release-1/* C:/release-2/createTable.sql release-3/* release-4/createView.sql"}
            commandLineExample={"--scriptPaths=C:/release-1/* C:/release-2/createTable.sql release-3/* release-4/createView.sql"}
        />
        <ConfigurationOption
            name={"Run Scripts In Transactions"}
            description={
            <p>
                Whether to execute scripts in transactions.
                <br />
                By default, SQL Shoot wraps all scripts in Run and Revert in a transaction.
                <br />
                This option allows you to manually override this behavior. It may be desirable to execute non-transactional statements.
                <br />
                <code>true</code> or <code>false</code>
            </p>
            }
            exampleValue={"true"}
            commandLineExample={"--runScriptsInTransactions=true"}
        />
        <ConfigurationOption
            name={"Fake"}
            description={
            <p>
                Whether to avoid executing scripts when running commands.
                <br />
                The change history table is updated without the script actually having been run.
                <br />
                <code>true</code> or <code>false</code>
            </p>
            }
            exampleValue={"true"}
            commandLineExample={"--fake=true"}     
        />
      </div>
    </div>
    </section>
    </Layout>
  )
}
