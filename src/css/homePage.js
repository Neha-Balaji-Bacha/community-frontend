export const styles = {
  container: `
    w-full min-h-screen flex items-center pt-24 sm:pt-28 pb-16 relative overflow-hidden
    bg-gradient-to-br from-white via-gray-50 to-emerald-100
  `,

  glow: `
    absolute top-[-100px] right-[-100px] w-[500px] h-[500px] 
    bg-emerald-300 opacity-20 blur-3xl rounded-full
  `,

  inner: `
    w-full max-w-7xl mx-auto px-6 lg:px-12 
    grid lg:grid-cols-2 gap-16 items-center
  `,

  left: `
    space-y-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left
  `,

  tag: `
    inline-block px-4 py-1.5 text-sm tracking-wide
    bg-emerald-50 text-emerald-600 rounded-full font-semibold
  `,

  heading: `
    text-[38px] sm:text-[46px] lg:text-[54px] 
    leading-tight font-bold tracking-tight
  `,

  headingPrimary: "text-gray-900",
  headingHighlight: "text-emerald-500",

  description: `
    text-gray-500 text-[17px] leading-relaxed max-w-md
  `,

  features: `
    space-y-3 text-gray-700 text-[16px]
  `,

  featureItem: `
    flex items-center gap-3 justify-center lg:justify-start
  `,

  featureIcon: `
    w-7 h-7 flex items-center justify-center 
    bg-emerald-100 text-emerald-600 rounded-full 
    text-sm font-bold
  `,

buttonGroup: `
  flex gap-3 mt-5
  justify-center lg:justify-start
  items-center
`,

buttonPrimary: `
  px-6 py-2.5 text-sm font-semibold 
  bg-emerald-500 text-white rounded-lg
  shadow-sm hover:shadow-md
  hover:bg-emerald-600 hover:-translate-y-[1px]
  transition-all duration-200
`,

buttonSecondary: `
  px-6 py-2.5 text-sm font-semibold 
  text-emerald-600 rounded-lg
  border border-emerald-500
  bg-white
  hover:bg-emerald-50 hover:border-emerald-400
  hover:-translate-y-[1px]
  transition-all duration-200
`,

  buttonOutline: `
    px-8 py-3 text-base font-medium 
    border border-gray-300 rounded-lg text-gray-700 
    hover:bg-gray-100 transition
  `,

  rightWrapper: `
    flex-1 flex justify-center
  `,

  rightCard: `
    w-full 
    bg-white/70 backdrop-blur-md p-3 rounded-2xl
    shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
    border border-gray-200
    transition duration-300 hover:-translate-y-2 hover:shadow-xl
  `,

  image: `
    w-full max-w-[820px] lg:max-w-[950px]
    h-auto object-contain mx-auto
    transition duration-500 hover:scale-105
  `,
};