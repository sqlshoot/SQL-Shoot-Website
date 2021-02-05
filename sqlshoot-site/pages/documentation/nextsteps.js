import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function NextSteps() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Next Steps"/>
      </div>
      <div className="column content">
      <h1>Next Steps</h1>
        That's it for the introduction! Now to begin using SQL Shoot in your development process.
        <br/>
        <br/>
        You should read the documentation for the various commands, and familiarize yourself with <a href="/documentation/general">how to configure SQL Shoot</a>.
        <br />
        <br />
        Using the instructions in <a href="/documentation/quickstart">Quick Start</a>, perhaps you can try deploying a few scripts to your development environment.
        <br />
        <br />
        You could try using the NuGet package to integrate SQL Shoot into your .NET applications. See <a href="/documentation/nuget">NuGet</a>.
        <br />
        <br />
        For integrating SQL Shoot into CI/CD processes, the Docker image is a good place to start. See <a href="/documentation/docker">Docker</a>.
        <br />
        <br />
        Feature request? Bug report? See the <a href="/documentation/troubleshooting">Troubleshooting</a> and <a href="/documentation/contributing">Contributing</a> pages.
        SQL Shoot is <a href="/documentation/github">open source, available on GitHub</a>, and is always on the look out for contributors.
      </div>
    </div>
    </section>
    </Layout>
  )
}
