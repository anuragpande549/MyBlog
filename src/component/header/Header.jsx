import React from 'react';
import { Container, Logo, LogoutBtn } from '../Index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((store) => store.user.states);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'LogIn', slug: '/login', active: !authStatus },
    { name: 'SignUp', slug: '/signup', active: !authStatus },
    { name: 'All Post', slug: '/all-post', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <div className="bg-gray-800 text-white">
      <Container>
        <nav className="flex justify-between items-center py-4">
          <Link to="/">
            <Logo width="70px" className="hover:opacity-80 transition-opacity duration-300" />
          </Link>
          <div>
            <ul className="flex space-x-6">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="text-white hover:text-gray-300 transition-colors duration-300"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
