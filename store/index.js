export const state = () => ({
  counter: 0,
  event: {}
});

export const mutations = {
  increment (state) {
    state.counter++
  },
  
  saveEvent(state, event) {
    state.event = event;
  }
};