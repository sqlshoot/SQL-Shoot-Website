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
      <div className="column">
        SQL Shoot is a change control tool for the database. With it you can:
        <ul>
          <li>Write changes as SQL script files</li>
          <li>Run scripts in an orderly manner</li>
          <li>See an audit trail of your changes to the database</li>
        </ul>
        It is accessed through a command line interface, or a NuGet package.
        <br />
        SQL Shoot works mainly with script files in your filesystem. Scripts are executed in a strict order, which means deployments are reliable and consistent.
        Dependencies between scripts can be easily enforced, and it has support for rollback scripts too.
        Because SQL shoot works with your filesystem, you can easily version control your database changes with a tool like Git or Subversion.
        Consistent script deployment order means you can use SQL Shoot to enable an 'Evolutionary Database Design' (migrations) process for your database.
      </div>
    </div>
    </section>
    </Layout>
  )
}
