export default function ConfigurationOption({ name, description, exampleValue, commandLineExample }) {
  return (
  <div class="card" style={ { margin: "10px" } }>
    <div class="card-content">
    <h4 className="title is-4">
      <a id={name.replace(/\s/g, '-')}></a>
      {name}
    </h4>
      <div class="content">
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