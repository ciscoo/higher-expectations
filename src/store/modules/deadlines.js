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
      text: 'Assignee',
      left: true,
      value: 'assignee'
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
      assignee: 'Person',
      points: 100,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 150,
      validation: [false, false]
    },
    {
      value: false,
      title: 'Work #3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 200,
      validation: [true, true]
    },
    {
      value: false,
      title: 'Work #4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 400,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 300,
      validation: [false, true]
    },
    {
      value: false,
      title: 'Work #6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 250,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 230,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 290,
      validation: [true, false]
    },
    {
      value: false,
      title: 'Work #9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      assignee: 'Person',
      points: 330,
      validation: [true, false]
    }
  ]
}

const getters = {
  deadlinesTableheaders ({ headers }) {
    return headers
  },
  deadlinesTableItems ({ items }) {
    return items
  }
}

const mutations = {
  [types.UPDATE_DEADLINES_SEARCH] (state, search) {
    state.search = search
  }
}

export default {
  state,
  getters,
  mutations
}
