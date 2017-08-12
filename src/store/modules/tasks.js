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
      text: 'Due Date',
      left: true,
      value: 'dueDate'
    },
    {
      text: 'Requirements',
      left: true,
      value: 'requirements'
    },
    {
      text: 'Assignee',
      left: true,
      value: 'audience'
    }
  ],
  // TODO: Change to empty array once API is finalized.
  items: [
    {
      value: false,
      title: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    },
    {
      value: false,
      title: 'Work #9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      requirements: 'Do this',
      audience: 'Person'
    }
  ]
}

const getters = {
  tasksTableheaders ({ headers }) {
    return headers
  },
  tasksTableItems ({ items }) {
    return items
  }
}

const mutations = {
  [types.UPDATE_TASKS_SEARCH] (state, search) {
    state.search = search
  }
}

export default {
  state,
  getters,
  mutations
}
