import windowInfo from './modules/windowInfo'

const getters = {
  seeTimes: () => windowInfo.state.seeTimes
}

export default getters
