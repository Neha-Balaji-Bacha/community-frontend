export const styles = {
  page:
    "min-h-screen flex items-start pt-32 px-6 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-100",

  blur:
    "absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-emerald-300 opacity-20 blur-3xl rounded-full",

  container:
    "max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center",

  left:
    "space-y-6 max-w-lg",

  // ✅ KEEP SAME
  title:
    "text-[44px] font-bold text-gray-900 leading-tight",

  highlight:
    "text-emerald-600",

  // ⬆ Slightly bigger
  desc:
    "text-gray-600 text-[19px] leading-relaxed",

  // ⬆ Slightly bigger
  list:
    "space-y-3 text-gray-700 text-[17px]",

  listItem:
    "flex items-center gap-3",

  tick:
    "w-5 h-5 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold",

  right:
    "flex justify-end md:pr-10",

  formBox:
    "w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200",

  // ⬆ Slightly bigger
  formTitle:
    "text-[26px] font-semibold text-gray-900 text-center",

  // ⬆ Slightly bigger
  formSubtitle:
    "text-gray-500 text-base text-center mt-1 mb-6",

  inputGroup:
    "space-y-1",

  // ⬆ Slightly bigger
  label:
    "text-[15px] text-gray-600",

  // ⬆ Better readability
  input:
    "w-full mt-1 px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none",

  // ⬆ Slightly bigger
  button:
    "w-full py-3 text-base bg-emerald-500 text-white rounded-lg font-medium shadow-md hover:bg-emerald-700 transition",

  // ⬆ Slightly bigger
  loginText:
    "text-center text-gray-500 text-base",

  link:
    "text-emerald-600 font-medium hover:underline",

  errorTextField:
    "text-red-600 text-sm mt-1 block",

  errorTextGeneral:
    "text-red-600 text-base mt-3 text-center block",
};