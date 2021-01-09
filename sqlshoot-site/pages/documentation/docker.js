import Layout from '../layout'
import SidebarNav from './sidebarNav';

export default function Docker() {
  return (
    <Layout>
    <section>
    <div className="columns">
      <div className="column is-one-quarter">
      <SidebarNav activeItemName="Docker"/>
      </div>
      <div className="column content">
      <h1>Docker</h1>
        You can pull the latest Docker version of SQL shoot here:
        <br />
        <br />
        <a href="#">
          <button class="button is-link">Go to SQL Shoot DockerHub</button>
        </a>
        <h2>Docker Quick Start</h2>
        This is a brief guide to getting started with SQL Shoot in Docker.
        <br />
        <br />
        First, let's run the Docker image with the default configuration.
        <br/>
        <br/>
        <code>docker run --rm sqlshoot overview</code>
        <br/>
        <br/>
        The Docker image is an Ubuntu machine with the <a href="/documentation/linux">Linux SQL Shoot CLI</a> installed. Therefore it comes pre-configured with a minimal SQLite configuration.
        <br />
        <br />
        This includes a <code>config.yaml</code> file, and a <code>scripts</code> folder.

        <h3>Use SQL scripts from your host machine</h3>
        In order to use scripts from your host machine in the Docker image, you'll need to <a href="https://docs.docker.com/storage/volumes/">mount a volume</a>. That is to say, give the Docker image access to a folder on your machine.
        <br />
        <br />
        Create a folder on your machine called <code>scripts</code>. Put a trivial script in there (e.g. <code>select.sql</code>). Find the absolute path to that folder, and use the <code>-v</code> flag to mount it. For example:
        <br />
        <br />
        <code>
        docker run --rm -v absolute/path/to/scripts:/app/scripts sqlshoot-cli overview
        </code>
        <br />
        <br />
        SQL Shoot should pick up your sample script, and say it's pending.
        <br />
        <br />
        Note you can use the <code>$pwd</code> (<a href="https://unix.stackexchange.com/questions/174990/what-is-pwd-vs-current-working-directory">in Bash</a>, <a href="https://devblogs.microsoft.com/scripting/powertip-find-current-directory-in-powershell/">in PowerShell</a>, etc) variable to use a relative path:
        <br />
        <br />
        <code>
        docker run --rm -v $pwd/path/to/scripts:/app/scripts sqlshoot-cli overview
        </code>
        <br />
        <br />
        Also note you may need to escape arguments with double quotes in some shell contexts (like PowerShell):
        <br />
        <br />
        <code>
        docker run --rm -v "$pwd/path/to/scripts:/app/scripts" sqlshoot-cli overview
        </code>

        <h3>Command line arguments</h3>
        The simplest way to run SQL Shoot in Docker is to use command line arguments, as these will override default configuration.
        <br />
        <br />
        In this example we'll use SQL Shoot against a SQL Server database, running on the local machine on port 1433:
        <br />
        <br />
        <code>docker run --rm -p 1433:1433 -v $pwd/path/to/scripts:/app/scripts sqlshoot-cli overview --connectionString=Data Source=localhost,1433;User ID=myUser;Password=abc123 --databaseEngine=SQL Server --databaseName=sqlShootDb --primarySchema=mySchema</code>
        <br />
        <br />
        Note you'll need configure Docker to communicate outside of the container. In this case we've <a href="https://docs.docker.com/config/containers/container-networking/">mapped the port</a> with the <code>-p</code> argument. Windows users might find the <a href="https://stackoverflow.com/questions/48546124/what-is-linux-equivalent-of-host-docker-internal">
        <i>host.docker.internal</i>
        </a> address helpful for their connection string server addresses too.

        <h3>Use a config file from your host machine</h3>
        You can also mount a volume to use a <a href="/documentation/files">config file</a> on your host machine.
        <br />
        <br />
        Create a config file called <code>hostConfig.yaml</code>. We're going to mount this file into the Docker image, then use the <a href="/documentation/commandlinearguments#Config-Filepath">Config Filepath</a> command line argument to use it.
        <br />
        <br />
        <code>docker run -v $pwd/path/to/scripts:/app/scripts -v $pwd/hostConfig.yaml:/app/hostConfig.yaml sqlshoot-cli overview --configFilepath=hostConfig.yaml</code>
        <br />
        <br />
        Note the default <code>config.yaml</code> is still inside the Docker container. You can't override it - instead you tell SQL Shoot to ignore it and use the one we've mounted.
      </div>
    </div>
    </section>
    </Layout>
  )
}
