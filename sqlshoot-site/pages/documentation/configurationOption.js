export default function ConfigurationOption({ name, description, example }) {
    return (
        <div>
            Name: {name}
            <br />
            Description
            <br />
            {description}
            <br />
            Example value
            <br />
            {example}
        </div>)
}