const styles = {
navContainer: `
  fixed top-0 left-0 z-50 w-full flex justify-center px-2 py-3
  bg-white/90 backdrop-blur-md
`,

  navWrapper: `
    w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3
    bg-white/95 backdrop-blur-md border border-gray-200
    rounded-2xl shadow-sm relative
  `,

  logoWrapper: `
    flex items-center gap-2
  `,

  logoText: `
    text-xl sm:text-2xl font-semibold text-gray-800
  `,

  leftSection: `
    flex items-center gap-6 sm:gap-12
  `,

  navLinks: `
    hidden md:flex items-center gap-6 text-[16px] lg:text-[18px]
  `,

navLink: (isActive) =>
  `relative px-2 py-1 transition ${
    isActive
      ? "text-emerald-600 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-emerald-500"
      : "text-gray-600 hover:text-emerald-600"
  } focus:outline-none`,

  rightSection: `
    hidden md:flex items-center gap-3
  `,

  buttonOutline: `
    px-4 py-1.5 rounded-lg text-gray-700 
    border border-gray-300 hover:bg-gray-100 transition text-sm sm:text-base
  `,

  buttonPrimary: `
    px-5 py-1.5 rounded-lg text-white font-medium
    bg-emerald-500 hover:bg-emerald-600
    transition shadow-sm text-sm sm:text-base
  `,

  menuButton: `
    md:hidden text-2xl text-gray-700
  `,

  mobileMenu: `
    absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md
    flex flex-col items-center gap-4 py-6 md:hidden z-50 rounded-b-2xl
  `,
};

export default styles;