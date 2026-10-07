import React, { useState } from "react";
import {
    House,
    Film,
    Tv,
    Baby,
    Settings,
    CircleHelp,
    MessageCircle,
    Plus,
} from "lucide-react";

import styles from "./Sidebar.module.css";

function Sidebar() {
    const [activeItem, setActiveItem] = useState("Home");

    const menuItems = [
        {
            name: "Home",
            icon: House,
        },
        {
            name: "Movies",
            icon: Film,
        },
        {
            name: "Series",
            icon: Tv,
        },
        {
            name: "Kids",
            icon: Baby,
        },
    ];

    const bottomItems = [
        {
            name: "Settings",
            icon: Settings,
        },
        {
            name: "Help",
            icon: CircleHelp,
        },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sideWidth}>

                <div className={styles.sideOne}>
                    {menuItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className={styles.sidePages}><Icon className={styles.sideIcons} /></div>
                        )

                    })}
                </div>

                <div className={styles.sideTwo}>
                    {bottomItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className={styles.sidePages}>
                                <Icon className={styles.sideIcons} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;