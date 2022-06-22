import React from "react";

const styles = {
    header: 'z-50 bg-[#5F60FF] w-screen flex justify-center items-center text-white py-5 font-extralight',
    headerContainer: 'flex justify-center items-center w-3/6'
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className="text-center">
          Please provide us with your business contact details so we can send
          you the detailed analysis and recommendations based on your inputs.
        </h1>
      </div>
    </header>
  );
};

export default Header;
