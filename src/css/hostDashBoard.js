const styles = {
 page:
  "min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-100 py-12 px-4 mt-16 sm:mt-20",
  container:
    "max-w-7xl mx-auto space-y-10",

header:
  "flex flex-col md:flex-row md:justify-between md:items-center gap-6 pb-4",
  
  title:
    "text-3xl font-bold text-gray-900",

  badge:
    "inline-block mt-2 px-3 py-1 text-sm bg-emerald-100 text-emerald-600 rounded-full font-semibold",

  section:
    "bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm space-y-5",

  sectionHeader:
    "flex justify-between items-center",

  sectionTitle:
    "text-xl font-semibold text-gray-800",

  grid:
    "grid sm:grid-cols-3 gap-5",

  card:
    "bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 w-full",

  link:
    "text-xl font-semibold text-emerald-600 hover:underline",

  category:
    "text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium",

  description:
    "text-base text-gray-500 mt-2",

  text:
    "text-base text-gray-600 mt-1",

  primaryBtn:
    "px-5 py-2.5 text-base bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition shadow-sm",

  deleteBtn:
    "px-3 py-1.5 text-base bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition",

  leaveBtn:
    "px-3 py-1.5 text-base border border-gray-300 rounded-md hover:bg-gray-100 transition",
};

export default styles;