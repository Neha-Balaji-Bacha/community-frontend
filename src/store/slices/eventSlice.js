import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rsvpedEvents: [],
  myCreatedEvents: [],
  allEvents: [],
  currentEvent: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // RSVP Event
    // rsvpEvent: (state, action) => {
    //    const eventId = action.payload;

    //   if(!state.rsvpedEvents.includes(eventId)){
    //     state.rsvpedEvents.push(eventId);
    //   }
    //   else{
    //     state.rsvpedEvents = state.rsvpedEvents.filter(
    //       (id) => id !== eventId
    //     )
    //   }
    // },

    // Cancel RSVP
    // cancelRsvp: (state, action) => {
    //   const { eventId } = action.payload;

    //   state.rsvpedEvents = state.rsvpedEvents.filter(
    //     (event) => event._id !== eventId
    //   );
    // },

    // Create Event
  createEvent: (state, action) => {
  const newEvent = action.payload;

  if (!state.myCreatedEvents) {
    state.myCreatedEvents = []; // safety
  }

  state.myCreatedEvents.push(newEvent);
},
    // Delete Event
    deleteEvent: (state, action) => {
      const { eventId } = action.payload;

      state.myCreatedEvents = state.myCreatedEvents.filter(
        (event) => event._id !== eventId
      );
    },

    // Set Existing Events (after login)
setExistingEventsDetails: (state, action) => {
  const { rsvpedEvents, myCreatedEvents } = action.payload;

  if (rsvpedEvents) {
    state.rsvpedEvents = rsvpedEvents;
  }

  if (myCreatedEvents) {
    state.myCreatedEvents = myCreatedEvents;
  }
},
    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },
    setCurrentEvent: (state,action) => {
      state.currentEvent = action.payload;
    },
    
    setAllRSVPEvents: (state,action) =>{
      state.rsvpedEvents = action.payload;
    },

    deleteEventsByCommunity: (state, action) => {
  const { communityId } = action.payload;

  // remove from created events
  state.myCreatedEvents = state.myCreatedEvents.filter(
    (event) => event.communityId?._id !== communityId
  );

  // remove from RSVP events
  state.rsvpedEvents = state.rsvpedEvents.filter(
    (event) => event.communityId?._id !== communityId
  );
}

  },
});

export const {
  rsvpEvent,
  createEvent,
  deleteEvent,
  setExistingEventsDetails,
  setAllEvents,
  setCurrentEvent,
  setAllRSVPEvents,
  deleteEventsByCommunity
} = eventSlice.actions;

export default eventSlice.reducer;