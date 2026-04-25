const styles = {
  container:
  "min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-100 px-4 sm:px-6 pt-24 pb-6 sm:pt-28",
card:
  "max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-5 sm:p-8 border border-gray-200",
  header:
    "flex flex-col items-center text-center gap-2 pb-6 border-b border-gray-200",

  avatarWrapper: "relative",

  avatar:
    "w-24 h-24 rounded-full border-4 border-emerald-300 shadow-lg overflow-hidden",

  avatarImg: "w-full h-full object-cover",

  uploadBtn:
    "absolute bottom-0 right-0 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full",

  name:
    "text-2xl font-semibold text-gray-800 mt-2",

  email:
    "text-gray-500 text-sm",

  roleBase:
    "mt-1 px-3 py-1 rounded-full text-xs font-medium",

  roleHost:
    "bg-emerald-100 text-emerald-700",

  roleMember:
    "bg-blue-100 text-blue-700",

  bio:
    "text-base text-gray-600 mt-3 max-w-md",

 statsContainer:
  "grid grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6",
  statCard:
    "bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition",

  statNumber:
    "text-3xl font-bold",

  statLabel:
    "text-gray-500 text-sm mt-1",

  actionContainer:
    "flex justify-center gap-4 mt-6",

  primaryBtn:
    "px-6 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition",

  secondaryBtn:
    "px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 hover:border-gray-400 transition",

  btnContainer:
    "flex justify-center gap-4 mt-6 pt-4 border-t border-gray-200",

  upgradeBtn:
    "px-5 py-2 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-600",

  logoutBtn:
    "px-5 py-2 bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-200",
};

export default styles;