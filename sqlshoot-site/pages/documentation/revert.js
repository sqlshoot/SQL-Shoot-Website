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
        <h3>Command Line Example</h3>
        <pre>
          <code>
          > sqlshoot overview<br />
          SQL Shoot version: 0.0.1<br />
          ┌────────────────────┬───────────────┬─────────┬────────────┬─────────────────────┐<br />
          │ Name               │ Type          │ State   │ Revertable │ timestamp           │<br />
          ├────────────────────┼───────────────┼─────────┼────────────┼─────────────────────┤<br />
          │ createTable        │ Script        │ Applied │ Yes        │ 12/12/2021 19:10:01 │<br />
          │ createView         │ Script        │ Applied │ Yes        │ 12/12/2021 19:10:01 │<br />
          │ insertData         │ Script        │ Applied │ No         │ 12/12/2021 19:10:01 │<br />
          │ createView.revert  │ Revert Script │ Pending │ n/a        │                     │<br />
          │ createTable.revert │ Revert Script │ Pending │ n/a        │                     │<br />
          └────────────────────┴───────────────┴─────────┴────────────┴─────────────────────┘<br />
          <br />
          > sqlshoot revert<br />
          SQL Shoot version: 0.0.1<br />
          Running script createView.revert<br />
          </code>
        </pre>
      </div>
    </div>
    </section>
    </Layout>
  )
}
