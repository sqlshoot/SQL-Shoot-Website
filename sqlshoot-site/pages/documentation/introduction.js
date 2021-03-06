import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Introduction() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Introduction"/>
      </div>
      <div className="column content">
      <h1>Introduction</h1>
        SQL Shoot is a free & open source change control tool for the database. With it you can:
        <ul>
          <li>Write changes as SQL script files</li>
          <li>Run scripts in an orderly manner</li>
          <li>See an audit trail of your changes to the database</li>
        </ul>
        It is accessed through a command line interface, or a <a href="nuget">C# API, published via a .NET 5 NuGet package</a>.
        <br />
        <br />
        SQL Shoot works mainly with SQL script files in your filesystem. Scripts are executed in a strict order, which means deployments are reliable and consistent.
        <br />
        <br />
        Dependencies between scripts can be enforced, and it has support for rollback scripts too.
        <br />
        <br />
        Because SQL shoot works with your filesystem, you can version control your database changes with a tool like Git or Subversion.
        <br />
        <br />
        Consistent script deployment order means you can use SQL Shoot to enable an 'Evolutionary Database Design' (migrations) process for your database.
        <br />
        <br />
        <a href="quickstart">
          <button className="button is-link">Next: Quick Start</button>
        </a>
      </div>
    </div>
    </section>
    </Layout>
  )
}
