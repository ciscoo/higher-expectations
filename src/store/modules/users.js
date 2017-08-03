import * as types from '../mutation-types'

const state = {
  search: '',
  headers: [
    {
      text: 'First Name',
      left: true,
      value: 'firstName'
    },
    {
      text: 'Last Name',
      left: true,
      value: 'lastName'
    },
    {
      text: 'School',
      left: true,
      value: 'school'
    },
    {
      text: 'E-mail',
      left: true,
      value: 'email'
    },
    {
      text: 'Counselor',
      left: true,
      value: 'counselor'
    },
    {
      text: 'Class',
      left: true,
      value: 'yearInSchool'
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
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    },
    {
      value: false,
      firstName: 'StudentName',
      lastName: 'LastName',
      school: 'Park High',
      email: 'studentemail@parkhighgmail.com',
      counselor: 'Ms.Someone',
      yearInSchool: 'Sophomore',
      points: 1000
    }
  ]
}

const getters = {
  usersTableheaders ({ headers }) {
    return headers
  },
  usersTableItems ({ items }) {
    return items
  }
}

const mutations = {
  [types.UPDATE_USER_SEARCH] (state, search) {
    state.search = search
  }
}

export default {
  state,
  getters,
  mutations
}
