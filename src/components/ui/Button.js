// components/ui/ButtonLink.jsx
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'; // Para rutas internas

const ButtonLink = ({ 
  to, 
  children, 
  className = '', 
  external = false,
  ...props 
}) => {
  // Si es un enlace externo, usamos <a>
  if (external) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Si es un enlace interno, usamos Link de react-router
  return (
    <Link
      to={to}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default ButtonLink;