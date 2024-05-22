import arrowDownImg from "../assets/icon-arrow-down.svg";
import Dropdown from "./Dropdown";
import todoImg from "../assets/icon-todo.svg";
import calendarImg from "../assets/icon-calendar.svg";
import planningImg from "../assets/icon-planning.svg";
import reminderImg from "../assets/icon-reminders.svg";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const featureItems = [
  {
    label: "Todo List",
    image: todoImg,
  },
  {
    label: "Calendar",
    image: calendarImg,
  },
  {
    label: "Reminders",
    image: reminderImg,
  },
  {
    label: "Planning",
    image: planningImg,
  },
];

const companyItems = [
  {
    label: "History",
  },
  {
    label: "Our Team",
  },
  {
    label: "Blog",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState("");
  const FeatureMenuRef = useRef();
  const CompanyMenuRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  function toggleMenu(identifier) {
    if (isMobile) {
      setMenuOpen((prevMenuOpen) => {
        return prevMenuOpen.includes(identifier)
          ? prevMenuOpen
              .split(" ")
              .filter((item) => item !== identifier)
              .join(" ")
          : prevMenuOpen + " " + identifier;
      });

      return;
    }

    {
      setMenuOpen((prevMenuOpen) => {
        return identifier === prevMenuOpen ? "" : identifier;
      });
    }
  }

  useEffect(() => {
    let handler = (event) => {
      if (
        !FeatureMenuRef.current.contains(event.target) &&
        !CompanyMenuRef.current.contains(event.target) &&
        !isMobile
      ) {
        setMenuOpen("");
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isMobile]);

  return (
    <nav className="navbar">
      <ul className="menu-items">
        <li className="menu-item" ref={FeatureMenuRef}>
          <a className="dropdown-trigger" onClick={() => toggleMenu("Feature")}>
            Feature{" "}
            <img
              src={arrowDownImg}
              alt="menu-open"
              className={
                menuOpen.includes("Feature") ? "arrow-active" : "arrow-inactive"
              }
            ></img>
          </a>
          <Dropdown
            items={featureItems}
            className={menuOpen.includes("Feature") ? "active" : ""}
          />
        </li>

        <li className="menu-item" ref={CompanyMenuRef}>
          <a className="dropdown-trigger" onClick={() => toggleMenu("Company")}>
            Company{" "}
            <img
              src={arrowDownImg}
              alt="menu-open"
              className={
                menuOpen.includes("Company") ? "arrow-active" : "arrow-inactive"
              }
            ></img>
          </a>
          <Dropdown
            items={companyItems}
            className={menuOpen.includes("Company") ? "active" : ""}
          />
        </li>
        <li className="menu-item">
          <a href="#" className="dropdown-trigger">
            Careers
          </a>
          <div className="dropdown-container"></div>
        </li>
        <li className="menu-item">
          <a href="#" className="dropdown-trigger">
            About
          </a>
          <div className="dropdown-container"></div>
        </li>
      </ul>
    </nav>
  );
}
