import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Revert() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Revert"/>
      </div>
      <div className="column content">
        <h1>Revert</h1>
        The Revert command executes revert scripts in the order described in Ordering & Dependencies.
        <br />
        Revert will execute the relevant revert script for the latest applied Script (not On Change Scripts or other Revert Scripts). It only reverts one script at a time. 
        Command Line Example:
        <br />
        <code>sqlshoot revert</code>
        <br />
        Output:
        <br />
      </div>
    </div>
    </section>
    </Layout>
  )
}
