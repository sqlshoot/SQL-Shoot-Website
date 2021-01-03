const introductionListMenuItems = [
    "Introduction",
    "Quick Start",
    "Scripts",
    "Ordering & Dependencies",
    "Change History",
    "Next Steps"
];

const usageListMenuItems = [
    "Windows",
    "Linux",
    "Docker",
    "NuGet"
];

const commandsListMenuItems = [
    "Overview",
    "Run",
    "Nuke",
    "Revert",
    "Recover"
];

const configurationListMenuItems = [
    "General",
    "Files",
    "Command line arguments",
    "All Options"
];

const databaseSupportListMenuItems = [
    "SQL Server",
    "SQLite"
];

const communityAndTroubleshootingListMenuItems = [
    "Troubleshooting",
    "Contributing",
    "Release Notes"
];


function createListMenu(listMenuItems, activeItemName) {
    const listMenu = [];

    for (const [index, item] of listMenuItems.entries()) {
        const link = "/documentation/" + item.replace(/\s/g, '').toLowerCase();

        if (item === activeItemName) {
            listMenu.push(<li key={index}><a className="is-active" href={link}>{item}</a></li>);
        } else {
            listMenu.push(<li key={index}><a href={link}>{item}</a></li>);
        }
    }

    return listMenu;
}

export default function SidebarNav({ activeItemName }) {
  return (
    <aside className="menu">
        <p className="menu-label">
            Introduction
        </p>
        <ul className="menu-list">
            {createListMenu(introductionListMenuItems, activeItemName)}
        </ul>
        <p className="menu-label">
            Usage
        </p>
        <ul className="menu-list">
        {createListMenu(usageListMenuItems, activeItemName)}
        </ul>
        <p className="menu-label">
            Commands
        </p>
        <ul className="menu-list">
        {createListMenu(commandsListMenuItems, activeItemName)}
        </ul>
        <p className="menu-label">
            Configuration
        </p>
        <ul className="menu-list">
        {createListMenu(configurationListMenuItems, activeItemName)}
        </ul>
        <p className="menu-label">
            Database support
        </p>
        <ul className="menu-list">
        {createListMenu(databaseSupportListMenuItems, activeItemName)}
        </ul>
        <p className="menu-label">
            Community & Troubleshooting
        </p>
        <ul className="menu-list">
        {createListMenu(communityAndTroubleshootingListMenuItems, activeItemName)}
        </ul>
    </aside>
  )
}
