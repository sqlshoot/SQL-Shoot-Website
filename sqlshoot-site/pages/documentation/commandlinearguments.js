import Layout from '../layout'
import SidebarNav from './sidebarNav'
import ConfigurationOption from './configurationOption'

export default function AllOptions() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Command line arguments"/>
      </div>
      <div className="column content">
        <h1>Command line arguments</h1>
        This page lists the command line specific options for SQL Shoot. See All Options for details of the main options.
        <br />
        <br />
        Command line arguments override options specified in configuration files.

        <h2>General example</h2>
        Command line arguments are prefixed with a double hyphen <code>--</code>, and supplied with an equals sign <code>=</code>.
        <br />
        <br />
        <pre>
        <code>
        sqlshoot run --runScriptsInTransactions=true --scriptPaths=C:/scripts/*
        </code>
        </pre>
        <hr />
        <ConfigurationOption
            name={"Debug"}
            description={
            <p>
                Whether to output extra information for debugging.
                <br/>
                <code>true</code> or <code>false</code>
            </p>
            }
            exampleValue={"true"}
            commandLineExample={"--debug=true"}
        />
      </div>
    </div>
    </section>
    </Layout>
  )
}
