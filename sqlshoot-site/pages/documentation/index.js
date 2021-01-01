import Layout from './../layout'
import SidebarNav from './sidebarNav';

export default function Home() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Overview"/>
      </div>
      <div className="column">
        Hello
      </div>
    </div>
    </section>
    </Layout>
  )
}
