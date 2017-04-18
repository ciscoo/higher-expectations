import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types'

const App = (props) => (
  <MuiThemeProvider>
    <AppBar title={props.title} />
  </MuiThemeProvider>
)

App.PropTypes = {
  title: PropTypes.string
}

export default App
