import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Scripts() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Scripts"/>
      </div>
      <div className="column content">
        <h1>Scripts</h1>
        SQL Shoot uses SQL script files to understand and apply changes to the database. This page explains the different script types, and the rules surrounding them.


        <h2>Scripts</h2>
        The most basic type of change is a SQL script file, termed a 'Script'. Scripts are executed against the database with the Run command.
        <br />
        <br />
        <strong>Rules:</strong>
        <ul>
            <li>Must have the <code>.sql</code> file extension.</li>
            <li>Must have unique filenames in order to be deployed.</li>
            <li>Scripts are executed in alphabetical order. You can read more about deployment ordering and dependencies on this page.</li>
        </ul>
        <h3>Example</h3>
        <strong>createTable.sql</strong><br/>
        <pre>
        <code>
        CREATE TABLE customers (<br />
          first_name TEXT NOT NULL,<br />
          last_name TEXT NOT NULL<br />
        );
        </code>
        </pre>
        <h2>Revert Scripts</h2>
        Revert scripts are plain SQL scripts, used to rollback changes introduced by a Script. Revert Scripts are executed against the database with the Revert command.
        <br />
        <br />
        <strong>Rules:</strong>
        <ul>
            <li>Must have the <code>.revert.sql</code> file extension.</li>
            <li>Must have unique filenames in order to be deployed.</li>
            <li>The name of a Revert Script must match a Script change in order to be deployed.</li>
            <li>Revert Scripts are executed in reverse order - to ensure the latest change is reverted first. You can read more about deployment ordering and dependencies on this page.</li>
        </ul>
        <h3>Example</h3>
        <strong>createTable.revert.sql</strong><br/>
        <pre>
        <code>
        DROP TABLE customers;
        </code>
        </pre>
        <h2>On Change Scripts</h2>
        On Change scripts are similar to Scripts in that they're plain SQL files. However, whereas Scripts can only be executed once, On Change scripts are
        executed when the file contents have changed. On Change Scripts are executed against the database with the Run command.
        <br />
        <br />
        <strong>Rules:</strong>
        <ul>
            <li>Must have the <code>.onChange.sql</code> file extension.</li>
            <li>Must have unique filenames in order to be deployed.</li>
            <li>On Change Scripts are executed in alphabetical order, and can be interleaved with other script types. You can read more about deployment ordering and dependencies on this page.</li>
        </ul>
        <h3>Example</h3>
        <strong>createView.onChange.sql</strong><br/>
        <pre>
        <code>
        CREATE VIEW IF NOT EXISTS customersView (first_name)<br/>
        AS<br/>
          SELECT * FROM customers;
        </code>
        </pre>
        <a href="ordering&dependencies">
          <button class="button is-link">Next: Ordering & Dependencies</button>
        </a>
      </div>
    </div>
    </section>
    </Layout>
  )
}
