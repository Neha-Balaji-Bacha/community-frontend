const styles = {
  // Page
  page:
    "min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-100 py-20 px-4 sm:pt-28",

  container:
    "max-w-4xl mx-auto",

  // Card
  card:
    "bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200",

  title:
    "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900",

  description:
    "text-gray-600 mt-4 leading-relaxed",

  host:
    "text-sm text-gray-500 mt-1",

  // Info rows
  section:
    "mt-6 space-y-4",

  row:
    "flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg bg-gray-50 border border-gray-200",

  label:
    "text-gray-500 text-sm",

  value:
    "text-gray-800 font-medium text-sm",

  // Buttons
  actions:
    "flex flex-col sm:flex-row gap-3 mt-6 justify-center items-center",

  joinBtn:
    "w-full sm:w-auto px-6 py-3 bg-emerald-500 text-white rounded-xl shadow-md hover:bg-emerald-600 transition font-medium",

  leaveBtn:
    "px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition",

  deleteBtn:
    "px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition",

  errorText:
    "text-red-500 text-sm mt-2 text-center",

  // Attendees
  attendeesCard:
    "mt-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200",

  attendeesTitle:
    "text-lg sm:text-xl font-semibold text-gray-800 mb-4",

  attendeesList:
    "space-y-3",

  attendeeItem:
    "flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg bg-gray-50 border border-gray-200",

  attendeeName:
    "text-gray-700 font-medium",

  attendeeEmail:
    "text-sm text-gray-500",

  emptyText:
    "text-gray-500 text-sm text-center",
    
};

export default styles;