import React from "react";

const IconPill = ({ name, icon, alt, className = "icon-pill", isIcon = true }
  
) => {
  return (
    <div className={className}>
      <h5>
        {name} 
        {isIcon && icon && <img src={icon} alt={alt || name} />}
      </h5>
    </div>
  );
};

export default IconPill;