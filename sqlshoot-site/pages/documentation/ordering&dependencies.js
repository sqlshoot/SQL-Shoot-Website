import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function OrderingAndDependencies() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Ordering & Dependencies"/>
      </div>
      <div className="column content">
        <h1>Ordering & Dependencies</h1>
        SQL Shoot runs scripts in an orderly manner, according to a few rules. The general idea is that scripts are executed in the order they appear in your filesystem view.
        <br />
        <h2 className="title">Where does SQL Shoot look for scripts?</h2>
        SQL Shoot looks for scripts in filesystem locations. These locations are defined by the <code>scriptPaths</code> configuration option.
        <code>scriptPaths</code> can be either a directory, or a direct file path. See the <code>scriptPaths</code> page for more details.
        <br />
        <br />
        You can preview the deployment order with the Overview command.
        <br />
        <h2 className="title">Alphabetical ordering</h2>
        <code>scriptPaths</code> that have multiple files with no sub-directories are executed in alphabetical order. So, given the following files in your filesystem:
        <br />
        <ul>
            <li>createTable.sql</li>
            <li>createView.onChange.sql</li>
            <li>select.sql</li>
        </ul>
        <br />
        Scripts will be executed in this order:
        <br />
        <ol>
            <li>createTable.sql</li>
            <li>createView.onChange.sql</li>
            <li>select.sql</li>
        </ol>
        <h2 className="title">Sub Directories</h2>
        Sub-directories are searched first, in alphabetical order. So given this filesystem:
        <div className="content">
            <ul>
                <li>
                <li><i>Release-1</i></li>
                <ul>
                    <li>createTable.sql</li>
                </ul>
                <li><i>Release-2</i></li>
                <ul>
                    <li>select.sql</li>
                </ul>
                </li>
                <li>createView.onChange.sql</li>
            </ul>
        </div>
        Scripts will be executed in this order:
        <ol>
            <li>createTable.sql</li>
            <li>select.sql</li>
            <li>createView.onChange.sql</li>
        </ol>
        <h2 className="title">Dependencies between scripts</h2>
        When scripts are dependent on each other, you need to arrange your files in such a way to ensure scripts are deployed in the correct order.
        <br />
        SQL Shoot can be configured in a number of ways to ensure strict script ordering. The simplest is to append a number before each script:
        <ul>
            <li>001_createTable.sql</li>
            <li>002_createView.onChange.sql</li>
            <li>003_select.sql</li>
        </ul>
        This can work in sub folders too:
        <ul>
            <li>
            <li><i>Release-1</i></li>
            <ul>
                <li>001_createTable.sql</li>
                <li>002_createAnotherTable.sql</li>
            </ul>
            <li><i>Release-2</i></li>
            <ul>
                <li>003_select.sql</li>
            </ul>
            </li>
            <li>004_createView.onChange.sql</li>
        </ul>
        You aren't forced to follow this approach for all your scripts. Say that <code>Release-2</code> has scripts with tricky dependencies,
        whereas other releases can go in any order. You could arrange scripts like so:
        <ul>
            <li>
            <li><i>Release-1</i></li>
            <ul>
                <li>createTable.sql</li>
            </ul>
            <li><i>Release-2</i></li>
            <ul>
                <li>01_tricky.sql</li>
                <li>02_anotherTrickyOne.sql</li>
                <li>03_select.onChange.sql</li>
            </ul>
            </li>
            <li>createView.onChange.sql</li>
        </ul>
        The scripts will be deployed in the order you see here - which generally reflects what you'll see in your filesystem view.
        <br />
        You can define multiple <code>scriptPaths</code> too, which are searched in the order specified.
        <br />
        <br />
        If you want total control over execution order, you can specify the direct path to each script in your <code>scriptPaths</code>,
        bypassing SQL Shoot's built-in ordering process altogether.
        <br />
        <br />
        <a href="changehistory">
          <button class="button is-link">Next: Change History</button>
        </a>
      </div>
    </div>
    </section>
    </Layout>
  )
}
