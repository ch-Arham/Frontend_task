import React from "react";

const styles = {
    header: 'z-50 bg-[#5F60FF] w-screen flex justify-center items-center text-white py-5 font-bold text-xl',
    headerContainer: 'flex justify-center items-center w-3/6'
};

const Header = ({title}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className="text-center tracking-wide">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;