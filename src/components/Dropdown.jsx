/* eslint-disable react/prop-types */
export default function Dropdown({ items, className }) {
  return (
    <div className={`dropdown-container ${className}`}>
      <ul className="dropdown">
        {items.map((item) => (
          <li key={item.label} className="dropdown-item">
            {item.image && <img src={item.image} />}
            <a>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
