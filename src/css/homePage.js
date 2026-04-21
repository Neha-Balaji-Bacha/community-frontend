const styles = {
container: `
  w-full min-h-[90vh] flex items-center pt-10 pb-16 relative overflow-hidden
  bg-gradient-to-br from-white via-gray-50 to-emerald-100
`,

  glow: `
    absolute top-[-100px] right-[-100px] w-[500px] h-[500px] 
    bg-emerald-300 opacity-20 blur-3xl rounded-full
  `,

  // 🔥 clean layout
  inner: `
    w-full max-w-7xl mx-auto px-6 lg:px-12 
    grid lg:grid-cols-2 gap-16 items-center
  `,

  // 🔥 slightly tighter for balance
  left: `
    space-y-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left
  `,

  tag: `
    inline-block px-4 py-1.5 text-sm tracking-wide
    bg-emerald-50 text-emerald-600 rounded-full font-semibold
  `,

  // 🔥 refined typography
  heading: `
    text-[38px] sm:text-[46px] lg:text-[54px] 
    leading-tight font-bold tracking-tight text-gray-900
  `,

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

  buttonPrimary: `
    px-8 py-3 text-base font-semibold 
    bg-emerald-500 text-white rounded-lg 
    hover:bg-emerald-600 transition shadow-md hover:shadow-lg
  `,

  buttonOutline: `
    px-8 py-3 text-base font-medium 
    border border-gray-300 rounded-lg text-gray-700 
    hover:bg-gray-100 transition
  `,

  // 🔥 CLEAN CARD (less padding + softer look)
  rightCard: `
    w-full 
    bg-white/70 backdrop-blur-md p-3 rounded-2xl
    shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
    border border-gray-200
    transition duration-300 hover:-translate-y-2 hover:shadow-xl
  `,

  // 🔥 PERFECT IMAGE SCALE
  image: `
    w-full max-w-[820px] lg:max-w-[950px]
    h-auto object-contain mx-auto
    transition duration-500 hover:scale-105
  `,
};

export default styles;