const styles = {
  container:
    "relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-emerald-100 px-6 lg:px-16 overflow-hidden",

  wrapper:
    "w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-12 items-center",

  // LEFT SECTION
  left:
    "space-y-6 max-w-md mx-auto md:mx-0",

  title:
    "text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight",

  highlight:
    "text-emerald-600",

  desc:
    "text-gray-600 text-lg leading-relaxed",

points: "space-y-4 text-gray-700 text-base mt-8",

  pointItem:
    "flex items-center gap-3",

  pointIcon:
    "w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold",

  // FORM
form:
"bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-gray-200 w-full max-w-md mx-auto space-y-6",
  heading:
    "text-1.5xl md:text-2xl font-semibold text-center text-gray-800",

  input:
    "w-full px-4 py-4 border border-gray-300 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition",

  textarea:
    "w-full px-4 py-4 border border-gray-300 rounded-2xl text-base h-28 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition",

  select:
    "w-full px-4 py-4 border border-gray-300 rounded-2xl text-base bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition",

  button:
    "w-full py-4 text-lg bg-gradient-to-r from-emerald-500 to-emerald-500 text-white font-semibold rounded-2xl hover:scale-[1.03] hover:shadow-2xl active:scale-[0.97] transition-all duration-200",

  errorTextField:
    "text-red-600 text-sm mt-1 block",

  errorTextGeneral:
    "text-red-600 text-sm mt-3 text-center block",
};

export default styles;