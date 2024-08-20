import merge from 'lodash/merge'

import border from './border'
import colors from './colors'
import typography from './typography'

export default function getOverridesTokens() {
  return merge(colors, typography, border)
}
