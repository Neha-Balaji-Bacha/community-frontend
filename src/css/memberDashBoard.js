const styles = {
 container:
  "min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-100 pt-20 sm:pt-28 pb-12",
  inner:
    "max-w-7xl mx-auto px-6 space-y-12",

  header:
    "flex flex-col md:flex-row md:items-center md:justify-between gap-6",

  title:
    "text-3xl font-bold text-gray-900 tracking-tight",

  badge:
    "inline-block mt-2 px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold",

  hostBtn:
    "px-6 py-3 text-base bg-emerald-500 text-white rounded-lg shadow-sm hover:bg-emerald-600 hover:shadow-md transition-all duration-200",

  section:
    "bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-gray-200",
  sectionTitle:
    "text-xl font-semibold text-gray-800 mb-5",

  grid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  card:
    "bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer",

  communityRow:
    "flex items-center justify-between",

  linkBlue:
    "text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition",

  linkGreen:
    "text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition",

  textSmall:
    "text-base text-gray-600 mt-1",

  textMuted:
    "text-sm text-gray-500 mt-2",

  emptyText:
    "text-gray-400 text-base text-center py-6 italic",

  leaveBtn:
    "text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-red-50 hover:text-red-600 transition-all duration-200",

  categoryBadge:
    "inline-block mt-3 px-3 py-1 text-sm font-semibold rounded-full tracking-wide",
};

export default styles;

export const categoryStyles = {
  mern: "bg-blue-100 text-blue-600",
  chess: "bg-purple-100 text-purple-600",
  cooking: "bg-orange-100 text-orange-600",
  tech: "bg-gray-200 text-gray-700",
  jobs: "bg-green-100 text-green-600",
  sports: "bg-red-100 text-red-600",
};