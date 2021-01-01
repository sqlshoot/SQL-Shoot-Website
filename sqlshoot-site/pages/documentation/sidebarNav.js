const listMenuItems = [
    "Overview",
    "Databases"
]

export default function SidebarNav({ activeItemName }) {
    const listMenu = [];

    for (const [index, item] of listMenuItems.entries()) {
        const link = "documentation/" + item.toLowerCase();

        if (item === activeItemName) {
            listMenu.push(<li key={index}><a className="is-active" href={link}>{item}</a></li>);
        } else {
            listMenu.push(<li key={index}><a href={link}>{item}</a></li>);
        }
    }

  return (
    <aside className="menu">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            {listMenu}
        </ul>
    </aside>
  )
}
