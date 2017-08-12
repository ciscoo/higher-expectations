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
      text: 'Type',
      left: true,
      value: 'type'
    },
    {
      text: 'Total Members',
      value: 'members'
    }
  ],
  // TODO: Change to empty array once API is finalized.
  items: [
    {
      value: false,
      name: 'Freshman',
      members: 564,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Sophomores',
      members: 123,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Juniors',
      members: 623,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Juniors',
      members: 623,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Juniors',
      members: 623,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Juniors',
      members: 623,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Juniors',
      members: 623,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    },
    {
      value: false,
      name: 'Seniors',
      members: 450,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.i dolorum odio aperiam.',
      type: 'Class'
    }
  ]
}

const getters = {
  groupsTableHeaders ({ headers }) {
    return headers
  },
  groupsTableItems ({ items }) {
    return items
  }
}

const mutations = {
  [types.UPDATE_GROUP_SEARCH] (state, search) {
    state.search = search
  }
}

export default {
  state,
  getters,
  mutations
}
