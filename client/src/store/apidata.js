import { writable } from 'svelte/store';

// Default values for store
const INITIAL_STATE = {
  stringdata: 'Hello World', 
  intdata: 0,
  arraydata: [],
  jsondata: {},
  visible: false,
  chartData: undefined
}

const { subscribe, set, update } = writable({...INITIAL_STATE});

// Methods
const methods = {
  reset: () => set({...INITIAL_STATE}),

  toggleVisibility: () => update(state => {
    state.visible = !state.visible;
    return state;
  }),

  incInt: () => update(state => {
    state.intdata += 1;
    return state;
  }),

  updateChartData: (apiData, title) => update(state => {
    if (apiData.length == 0) {
      state.chartData = undefined;
      return state;
    }

    var data = [];
    var labels = [];

    apiData.forEach(obj => {
      data.push(obj.count)
      labels.push(obj.vehicle_type)
    })

    state.chartData = {
      data: data, 
      labels: labels,
      title: title
    }

    return state;
  })
}

export default {
  subscribe,
  set,
  update, 
  ...methods
}
