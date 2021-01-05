import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Quickstart() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Quick Start"/>
      </div>
      <div className="column content">
        <h1>Quick Start</h1>
        This guide will show you how to install SQL Shoot, and learn the basic concepts using a sample SQLite database.
        <br />
        <br />
        The SQL Shoot installation will provide everything you need to follow this guide. You don't need to install any extra packages (like database drivers, runtimes, etc).
        <br />
        <br />
        Install the SQL Shoot command line for your operating system. Follow the instructions on the pages here: <a href="/documentation/windows">Windows</a> or <a href="/documentation/windows">Linux</a>.
        <br />
        <br />
        Open a command line terminal (PowerShell, Bash, etc) in the SQL Shoot installation directory.
        <br />
        <br />
        Run <code>sqlshoot overview</code>. This will have the side effect of creating a SQLite file database in the installation directory.
        You should see a table explaining the state of the database. 
        <br/>
        <br/>
        In your SQL Shoot installation directory, there should be a <code>scripts</code> folder.
        <br />
        <br />
        Create a new file in <code>scripts</code> called <code>createTable.sql</code>. Insert the following contents:
        <br />
        <br />
        <strong>createTable.sql</strong><br/>
        <pre>
        <code>
        CREATE TABLE customers (<br />
          first_name TEXT NOT NULL,<br />
          last_name TEXT NOT NULL<br />
        );
        </code>
        </pre>
        <br />
        Back in the terminal, run <code>sqlshoot overview</code> again to see the pending change.
        <br />
        <br />
        Run <code>sqlshoot run</code> to run the change.
        <br />
        <br />
        Congratulations! You have deployed your first database using SQL Shoot.
        <br/>
        <br/>
        The next pages provide more information about basic usage. As you read through, you can use this sample as a sandbox to experiment with each feature.
        <br />
        <br />
        <a href="scripts">
          <button class="button is-link">Next: Scripts</button>
        </a>
      </div>
    </div>
    </section>
    </Layout>
  )
}
