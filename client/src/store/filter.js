import { writable } from 'svelte/store';

// Default values for store
const INITIAL_FILTER = {
  origin: '', 
  destination: '',
  startdate: '',
  enddate: '',
  polygon: 0,
  cityId: 1, 
  geojson: {}
}

const { subscribe, set, update } = writable({...INITIAL_FILTER});

// Methods
const methods = {
  reset: () => set({...INITIAL_FILTER}), 

  setGeoJSON: (value) => update(state => {
    state.geojson = value;
    return state;
  }),

}

export default {
  subscribe,
  set,
  update, 
  ...methods
}
