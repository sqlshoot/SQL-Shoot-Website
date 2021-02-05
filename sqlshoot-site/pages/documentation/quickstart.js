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
        <h2>Instructions</h2>
        Install the SQL Shoot command line for your operating system. Follow the instructions on the pages here: <a href="/documentation/windows">Windows</a> or <a href="/documentation/windows">Linux</a>.
        <br />
        <br />
        Open a command line terminal (PowerShell, Bash, etc) in the SQL Shoot installation directory.
        <br />
        <br />
        In the terminal, run:

        <pre>
        <code>C:\sqlshoot> sqlshoot overview</code>
        </pre>
        
        You should see a table explaining the state of the database. Because we're using SQLite, this will also have the side effect of creating a SQLite file database in the installation directory.
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
        Back in the terminal, run:
        <pre>
        <code>C:\sqlshoot> sqlshoot overview</code>
        </pre>   
        You can now see a table showing that <code>createTable</code> is now pending.
        <br />
        <br />
        Now to apply the change. In the terminal, run:     
        <pre>
        <code>C:\sqlshoot> sqlshoot run</code>
        </pre>
        This will execute the script against the database.
        <br />
        <br />
        Congratulations! You have deployed your first database using SQL Shoot.
        <br/>
        <br/>
        The following pages provide more information about basic usage. As you read through, you can use this sample as a sandbox to experiment with each feature.
        <br />
        <br />
        <a href="scripts">
          <button className="button is-link">Next: Scripts</button>
        </a>
      </div>
    </div>
    </section>
    </Layout>
  )
}
