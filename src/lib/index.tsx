import 'react-app-polyfill/ie11'
import { Facets } from './containers/Facets'
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapperMenu from './containers/QueryWrapperMenu'
import QueryWrapper from './containers/QueryWrapper'
import StackedBarChart from './containers/StackedBarChart'
import StaticQueryWrapper from './containers/StaticQueryWrapper'
import SynapseTable from './containers/SynapseTable'
import UserCard from './containers/UserCard'
import Login from './containers/Login'
import CardContainer from './containers/CardContainer'
import CardContainerLogic from './containers/CardContainerLogic'
import './style/Cards.scss'
import './style/Portal.scss'
import { SynapseClient, SynapseConstants } from './utils/'

const SynapseComponents = {
  Facets,
  Login,
  QueryWrapper,
  StackedBarChart,
  StaticQueryWrapper,
  SynapseTable,
  CardContainer,
  QueryWrapperMenu,
  CardContainerLogic,
  UserCard,
  Markdown: MarkdownSynapse
}

export { SynapseClient, SynapseConstants, SynapseComponents }
