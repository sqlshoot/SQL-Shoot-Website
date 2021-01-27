const replace = str => str === undefined ? str : str.replace(/\s/g, '-');

export default function ConfigurationOption({ name, description, exampleValue, commandLineExample }) {
  return (
  <div className="card" style={ { margin: "10px" } }>
    <div className="card-content">
    <h4 className="title is-4">
      <a id={replace(name)}></a>
      {name}
    </h4>
      <div className="content">
      {description}
      Example value: <code>{exampleValue}</code>
      <br />
      <br />
      <strong>Command line example</strong>
      <pre>
        <code>sqlshoot run {commandLineExample}</code>
      </pre>
      </div>
    </div>
  </div>
  );
}