const styles = {
 navContainer: `
  sticky top-0 z-[100] w-full flex justify-center px-2 py-5
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
    `transition px-1 ${
      isActive
        ? "text-emerald-600 font-semibold"
        : "text-gray-600 hover:text-emerald-600"
    }`,

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

  // 📱 Mobile menu button
  menuButton: `
    md:hidden text-2xl text-gray-700
  `,

  // 📱 Mobile dropdown
  mobileMenu: `
    absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md
    flex flex-col items-center gap-4 py-6 md:hidden z-50 rounded-b-2xl
  `,
};

export default styles;