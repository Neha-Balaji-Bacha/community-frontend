export const styles = {
  page:
    "min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-100 px-6 py-6 sm:pt-24",

  header:
    "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 mt-10 cursor-pointer",

 title:
  "text-3xl md:text-4xl font-bold text-gray-900 leading-tight select-none",
  titleHighlight:
    "text-emerald-600",

  subtitle:
    "text-base text-gray-500 mt-2 max-w-md select-none",

  button:
    "px-6 py-3 text-base bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition shadow-sm",

  grid:
    "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",

  card:
    "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 hover:bg-white/90 transition-all duration-300 cursor-pointer flex flex-col gap-3 group",

  categoryBadge:
    "inline-flex items-center px-3 py-1 text-xs tracking-wide font-semibold rounded-full w-fit",

  titleCard:
    "text-xl font-semibold text-gray-900 leading-snug group-hover:text-emerald-600 transition mt-1",

  description:
    "text-base text-gray-500 mt-1 line-clamp-2",

  stats:
    "flex gap-6 mt-3 text-sm text-gray-500",

  statItem:
    "flex items-center gap-1",

  statNumber:
    "font-semibold text-gray-800",

  footer:
    "flex justify-between items-center mt-5 pt-3 border-t border-gray-100",

  // ⬆ Increased
  footerText:
    "text-base text-emerald-600 font-medium group-hover:text-emerald-700 transition",

  arrow:
    "text-emerald-500 transition-transform group-hover:translate-x-1",
};

export const categoryStyles = {
  mern: "bg-blue-100 text-blue-600",
  chess: "bg-purple-100 text-purple-600",
  cooking: "bg-orange-100 text-orange-600",
  tech: "bg-gray-200 text-gray-700",
  jobs: "bg-green-100 text-green-600",
  sports: "bg-red-100 text-red-600",
};