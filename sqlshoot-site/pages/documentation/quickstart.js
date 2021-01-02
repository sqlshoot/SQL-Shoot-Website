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
      <div className="column">
        This guide will show you how to install SQL Shoot, and learn the basic concepts using a throwaway SQLite database.
        The SQL Shoot installation will provide everything you need to follow this guide.
        <br />
        Install the SQL Shoot command line for your operating system - either Windows, Linux.
        <br />
        Open a command line terminal (PowerShell, Bash, etc) in the SQL Shoot installation directory.
        <br />
        Run <code>sqlshoot overview</code>. This will have the side effect of creating our throwaway SQLite file database in the installation directory. 
        <br/>
        In your SQL Shoot installation directory, there should be a <code>scripts</code> folder.
        <br />
        Create a new file in <code>scripts</code> called <code>createTable.sql</code>. Insert the following contents:
        <br />
        <strong>createTable.sql</strong>
        <br />
        <code>
        CREATE TABLE customers (
          first_name TEXT NOT NULL,
          last_name TEXT NOT NULL
        );
        </code>
        <br />
        Back in the terminal, run <code>sqlshoot overview</code> again to see the pending change.
        <br />
        Run <code>sqlshoot run</code> to run the change.
        <br />
        Congratulations! You have deployed your first database using SQL Shoot.
        <br/>
        The following pages provide more information about basic usage. As you read through, you can use this sample as a sandbox to play around with each feature.
      </div>
    </div>
    </section>
    </Layout>
  )
}
