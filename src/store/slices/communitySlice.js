import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  joinedCommunities: [],
  hostedCommunities: [],
  allCommunities: [],
  currentCommunity: null,
};

const communitiesSlice = createSlice({
  name: "communities",
  initialState,
  reducers: {
    joinCommunity: (state, action) => {
      const exists = state.joinedCommunities.find(
          (community) => community._id === action.payload._id
        );
        if (!exists) {
            state.joinedCommunities.push(action.payload);
          }
        },
      
      leaveCommunity: (state, action) => {
        const { communityId } = action.payload;
      
        state.joinedCommunities = state.joinedCommunities.filter(
            (community) => community._id !== communityId
          );
        },
      deleteCommunity: (state, action) => {
          const { communityId } = action.payload;
        
          state.hostedCommunities = state.hostedCommunities.filter(
              (community) => community._id !== communityId
            );
          },
    

   createCommunity: (state, action) => {
  const exists = state.hostedCommunities.find(
    (c) => c._id === action.payload._id
  );
  if (!exists) {
    state.hostedCommunities.push(action.payload);
  }
},
    
    
    setAllCommunities: (state, action) => {
      state.allCommunities = action.payload;
    },
    setCurrentCommunity: (state,action) => {
      state.currentCommunity = action.payload;
    },
    setExistingDetails: (state, action) => {
      const { joinedCommunities, hostedCommunities } = action.payload;
      
      if (joinedCommunities !== undefined) {
        state.joinedCommunities = joinedCommunities;
      }
      
      if (hostedCommunities !== undefined) {
        state.hostedCommunities = hostedCommunities;
      }
    },
  },
});

export const {
  joinCommunity,
  leaveCommunity,
  createCommunity,
  deleteCommunity,
  setAllCommunities,
  setExistingDetails,
  setCurrentCommunity,
} = communitiesSlice.actions;
export default communitiesSlice.reducer;

