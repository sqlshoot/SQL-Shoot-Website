import Layout from './layout'

export default function Pro() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column content">
      <h1 className="subtitle text-align-center">SQL Shoot Pro Edition</h1>
      <h4 className="subtitle is-4 text-align-center">Extra features and official support for high performing teams</h4>
      <hr />
      <div className="box has-text-centered">
        <div className="columns">
          <div className="column">
            <strong>Pre & Post Deployment Scripts</strong>
            <br />
            <div className="lnr lnr-small lnr-layers"/>
            <br />
            Run scripts before and after every deployment
          </div>
          <div className="column">
            <strong>Always Run Scripts</strong>
            <br />
            <div className="lnr lnr-small lnr-arrow-right"/>
            <br />
            Scripts which run even if already applied
          </div>
          <div className="column">
            <strong>Script Pre-Conditions</strong>
            <br />
            <div className="lnr lnr-small lnr-checkmark-circle"/>
            <br />
            Specify conditions that must be met before a script can be run
          </div>
          <div className="column">
            <strong>Official Support</strong>
            <br />
            <div className="lnr lnr-small lnr-phone-handset"/>
            <br />
            Get support from the SQL Shoot developers
          </div>
        </div>
      </div>
      <hr />
      <h2 className="subtitle text-align-center">Get SQL Shoot Pro Edition</h2>
      <h5 className="subtitle is-5 text-align-center">
        SQL Shoot is still in an early phase of development, and Pro Edition isn't yet available.
        <br />
        <br />
        Register your interest to be informed when it's released.
        <br />
        <br />
        In the meantime, get started with the free open source edition.
      </h5>
      <div className="columns">
        <div className="column" />
        <div className="column">
          <div className="buttons">
          <a className="button is-large is-fullwidth is-primary" href="https://colossal-builder-2480.ck.page/0425399972">
              Register interest
          </a>
          <a className="button is-large is-fullwidth" href="/documentation/introduction">
              Get Started with the free open source edition
          </a>
          </div>
        </div>
        <div className="column" />
        </div>
      </div>
    </div>
    </section>
    </Layout>
  )
}
