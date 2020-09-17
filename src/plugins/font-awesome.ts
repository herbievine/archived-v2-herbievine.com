// @ts-ignore
import FontAwesomeRenderer from '@/components/FontAwesomeRenderer'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faNpm,
    faMedium,
    faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

library.add(
    faTwitter,
    faGithub,
    faLinkedin,
    faNpm,
    faMedium,
    faStackOverflow,
    faAlignJustify
)

export { FontAwesomeRenderer }
