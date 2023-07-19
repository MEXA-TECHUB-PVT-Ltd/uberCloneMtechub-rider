import { createSlice } from '@reduxjs/toolkit';

const createProfileSlice = createSlice({
  name: 'createProfile',
  initialState:{
    personal: true,
    vehicle: false,
    CNIC: false,
    personalDoc: false,
    links: false,
    profile_Image: false,
    cover_Image: false,
  },
  reducers: {
    setPersonalMenu(state, action) {
        state.personal = action.payload;
      },
      setVehicleMenu(state, action) {
        state.vehicle = action.payload;
      },
      setCNICMenu(state, action) {
        state.CNIC = action.payload;
      },
      setPersonalDocMenu(state, action) {
        state.personal = action.payload;
      },
      setLinksMenu(state, action) {
        state.links = action.payload;
      },
      setProfileImageMenu(state, action) {
        state.profile_Image = action.payload;
      },
      setCoverImageMenu(state, action) {
        state.cover_Image = action.payload;
      },
    // toggleFlag: (state, action) => {
    //   const { flagName, value } = action.payload;
    //   state[flagName] = value;
    // },
  },
});

export const { setPersonalMenu,setVehicleMenu,setCNICMenu,setPersonalDocMenu,setLinksMenu,setCoverImageMenu,setProfileImageMenu} = createProfileSlice.actions;
export default createProfileSlice.reducer;