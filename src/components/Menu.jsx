import React from "react";

function Menu({active, setActive, setCategory}) {
    const links = [
        {id: 1, name: "Umum", value: "general"},
        {id: 2, name: "Bisnis", value: "business"},
        {id: 3, name: "Hiburan", value: "entertainment"},
        {id: 4, name: "Kesehatan", value: "health"},
        {id: 5, name: "Pengetahuan", value: "science"},
        {id: 6, name: "Olahraga", value: "sports"},
        {id: 7, name: "Teknologi", value: "technology"},
    ];

    function onClickActive(id, value) {
        setActive(id);
        setCategory(value);
    }
    return(
    <>
    <nav className="menu">
        {links.map(link => (
            <li key={link.id} className={ active === link.id ? "active" : "onpoint"} onClick={() => onClickActive(link.id, link.value)}>
               {link.name} 
            </li>
        ))}
    </nav>
    </>
    )
}

export default Menu;