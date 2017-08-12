import * as types from '../mutation-types'

const state = {
  search: '',
  headers: [
    {
      text: 'Name',
      left: true,
      value: 'name'
    },
    {
      text: 'Description',
      left: true,
      value: 'description'
    },
    {
      text: 'Location',
      left: true,
      value: 'location'
    },
    {
      text: 'Date',
      left: true,
      value: 'startDate'
    },
    {
      text: 'Points',
      value: 'points'
    }
  ],
  // TODO: Change to empty array once API is finalized.
  items: [
    {
      value: false,
      name: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 100,
      startDate: 'July 4th, 2017'
    },
    {
      value: false,
      name: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 100,
      startDate: 'July 4th, 2017'
    },
    {
      value: false,
      name: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 100,
      startDate: 'July 4th, 2017'
    },
    {
      value: false,
      name: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 100,
      startDate: 'July 4th, 2017'
    },
    {
      value: false,
      name: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 100,
      startDate: 'July 4th, 2017'
    },
    {
      value: false,
      name: 'Work #9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 330,
      validation: [true, false]
    }
  ]
}

const getters = {
  eventsTableheaders ({ headers }) {
    return headers
  },
  eventsTableItems ({ items }) {
    return items
  }
}

const mutations = {
  [types.UPDATE_EVENTS_SEARCH] (state, search) {
    state.search = search
  }
}

export default {
  state,
  getters,
  mutations
}
