export const styles = {
  page:
    "min-h-screen flex items-start pt-40 px-6 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-100",

  blur:
    "absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-emerald-300 opacity-20 blur-3xl rounded-full",

  container:
    "max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start",

  left:
    "space-y-6 max-w-xl",

  // ✅ KEEP SAME
  title:
    "text-[48px] font-bold text-gray-900 leading-tight",

  highlight:
    "text-emerald-500",

  // ⬆ Slightly bigger
  desc:
    "text-gray-600 text-[21px] leading-relaxed",

  // ⬆ Slightly bigger
  list:
    "space-y-3 text-gray-700 text-[19px]",

  listItem:
    "flex items-center gap-3",

  tick:
    "w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold",

  right:
    "flex justify-end md:pr-10",

  formBox:
    "w-full max-w-md backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl p-8 border border-gray-200",

  // ⬆ Slightly bigger
  formTitle:
    "text-[26px] font-semibold text-gray-900 text-center",

  // ⬆ Slightly bigger
  formSubtitle:
    "text-gray-500 text-base text-center mt-1 mb-6",

  // ⬆ Slightly bigger
  label:
    "text-[15px] text-gray-600",

  // ⬆ Better readability
  input:
    "w-full mt-1 px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition",

  forgot:
    "text-right text-base text-emerald-600 cursor-pointer hover:underline",

  // ⬆ Slightly improved
  button:
    "w-full py-3 text-base bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200",

  // ⬆ Slightly bigger
  footer:
    "text-center text-gray-500 mt-6 text-base",

  link:
    "text-emerald-600 font-medium hover:underline",

  // ⬆ Slightly bigger
  errorTextField:
    "text-red-600 text-sm mt-1",

  errorTextGeneral:
    "text-red-600 text-base text-center block",
};