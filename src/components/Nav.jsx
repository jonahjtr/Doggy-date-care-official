import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <button>
        <Link to="/homepage">homepage here</Link>
      </button>
      <button>
        <Link></Link>
      </button>
      <button>
        <Link></Link>
      </button>
      <button>
        <Link></Link>
      </button>
    </div>
  );
};

export default Nav;
