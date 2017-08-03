import * as types from '../mutation-types'

const state = {
  search: '',
  headers: [
    {
      text: 'Title',
      left: true,
      value: 'title'
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
      text: 'Points',
      value: 'points'
    },
    {
      text: 'Validation',
      value: 'validation'
    }
  ],
  // TODO: Change to empty array once API is finalized.
  items: [
    {
      value: false,
      title: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 100,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'Other School',
      points: 150,
      validation: [false, false]
    },
    {
      value: false,
      title: 'Work #3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 200,
      validation: [true, true]
    },
    {
      value: false,
      title: 'Work #4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School #3',
      points: 400,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 300,
      validation: [false, true]
    },
    {
      value: false,
      title: 'Work #6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 250,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 230,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      location: 'School',
      points: 290,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #9',
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
