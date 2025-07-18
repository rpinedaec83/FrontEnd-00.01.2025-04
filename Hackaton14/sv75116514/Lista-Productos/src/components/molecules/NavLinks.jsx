import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    const links = [
        { label: 'Women',      to: `/category/${encodeURIComponent("women's clothing")}` },
        { label: 'Men',        to: `/category/${encodeURIComponent("men's clothing")}` },
        { label: 'Jewelery',   to: '/category/jewelery' },
        { label: 'Electronics',to: '/category/electronics' },
      ];
      
  return (
    <ul className="navbar-nav d-flex flex-row gap-4 list-unstyled mb-0">
      {links.map(({ label, to }) => (
        <li key={to} className="nav-item">
          <NavLink
            to={to}
            end
            className={({ isActive }) =>
              `nav-link fw-medium p-0 ${isActive ? 'text-primary' : 'text-dark'}`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
