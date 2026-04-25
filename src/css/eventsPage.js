const styles = {
container:
  "min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-100 px-4 sm:px-6 pt-24 pb-6",
 header:
  "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 mt-2",
title:
  "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight select-none",
  highlight:
    "text-emerald-600",

  subtitle:
    "text-base text-gray-500 mt-2 select-none",

 searchWrapper:
  "max-w-7xl mx-auto mb-10 flex flex-col md:flex-row gap-4",
input:
  "w-full md:flex-1 px-4 py-3 text-base border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400",
searchBtn:
  "w-full md:w-auto px-6 py-3 text-base bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition",
 createBtn:
  "w-full md:w-auto px-5 py-2.5 text-sm md:text-base bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition",
  grid:
    "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",

  card:
    "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 cursor-pointer flex flex-col gap-3 group",

  titleCard:
    "text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition",

  meta:
    "text-base text-gray-500 flex flex-col gap-1",

  description:
    "text-base text-gray-500 line-clamp-2",

  time:
    "text-base text-emerald-600 font-medium mt-2",

  footer:
    "flex justify-between items-center mt-4 pt-3 border-t border-gray-100",

  footerText:
    "text-base text-emerald-600 font-medium group-hover:underline",

  arrow:
    "text-emerald-500 transition-transform group-hover:translate-x-1",

  empty:
    "text-base text-gray-500 mt-10 text-center",
};
export default styles;