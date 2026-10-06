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
            {/* Main Menu */}
            <div className={styles.menuSection}>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.name;

                    return (
                        <button
                            key={item.name}
                            className={`${styles.menuItem} ${isActive ? styles.active : ""
                                }`}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <span className={styles.activeLine}></span>

                            <span className={styles.iconBox}>
                                <Icon size={19} strokeWidth={1.8} />
                            </span>

                            <span className={styles.menuText}>{item.name}</span>
                        </button>
                    );
                })}
            </div>

            {/* Bottom Menu */}
            <div className={styles.bottomSection}>
                {bottomItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.name}
                            className={styles.menuItem}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <span className={styles.activeLine}></span>

                            <span className={styles.iconBox}>
                                <Icon size={19} strokeWidth={1.8} />
                            </span>

                            <span className={styles.menuText}>{item.name}</span>
                        </button>
                    );
                })}

                {/* Friend Chat */}
                <div className={styles.chatCard}>
                    <div className={styles.chatContent}>
                        <MessageCircle
                            size={19}
                            strokeWidth={1.7}
                            className={styles.chatIcon}
                        />

                        <span>
                            Friend chat
                            <br />
                            and Groups
                        </span>
                    </div>

                    <button className={styles.plusButton}>
                        <Plus size={20} strokeWidth={1.7} />
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;