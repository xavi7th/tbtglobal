If you change the main folder, make sure to reflect the changes in index.php and also in web pack.mix.js
Also set up your configs as you'd prefer


MDB installation

npm install --save mdbvue

Import style files in Your src/main.js before the App.vue file import:

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

so the top of the file similar to this:

import Vue from 'vue'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from './App.vue'

Then in node modules/mdbvue/src/index.js change

// let Input = require( './components/Input' ).default; 
TO
import Input from './components/Input';



Then Run your app

npm run watch

Problems? https://mdbootstrap.com/support/vue/problem-using-mdbvue-with-laravel/

For the MDB components, see the component import names here

// FREE
import Accordion, { mdbAccordion } from './components/Accordion';
import AccordionPane, { mdbAccordionPane } from './components/AccordionPane';
import Alert, {mdbAlert} from './components/Alert';
import Badge, { mdbBadge } from './components/Badge';
import Breadcrumb, { mdbBreadcrumb } from './components/Breadcrumb';
import BreadcrumbItem, { mdbBreadcrumbItem } from './components/BreadcrumbItem';
import Btn, { mdbBtn } from './components/Button';
import BtnGroup, { mdbBtnGroup } from './components/ButtonGroup';
import BtnToolbar, { mdbBtnToolbar } from './components/ButtonToolbar';
import Card, { mdbCard } from './components/Card';
import CardAvatar, { mdbCardAvatar } from './components/CardAvatar';
import CardBody, { mdbCardBody } from './components/CardBody';
import CardFooter, { mdbCardFooter } from './components/CardFooter';
import CardGroup, { mdbCardGroup } from './components/CardGroup';
import CardHeader, { mdbCardHeader } from './components/CardHeader';
import CardImg, { mdbCardImage } from './components/CardImg';
import CardUp, { mdbCardUp } from './components/CardUp';
import CardText, { mdbCardText } from './components/CardText';
import CardTitle, { mdbCardTitle } from './components/CardTitle';
import Carousel, { mdbCarousel } from './components/Carousel';
import CarouselCaption, { mdbCarouselCaption } from './components/CarouselCaption';
import CarouselIndicator, { mdbCarouselIndicator } from './components/CarouselIndicator';
import CarouselIndicators, { mdbCarouselIndicators } from './components/CarouselIndicators';
import CarouselInner, { mdbCarouselInner } from './components/CarouselInner';
import CarouselItem, { mdbCarouselItem } from './components/CarouselItem';
import CarouselNavigation, { mdbCarouselControl } from './components/CarouselNavigation';
import BarChart, { mdbBarChart } from './components/ChartBar';
import DoughnutChart, { mdbDoughnutChart } from './components/ChartDoughnut';
import LineChart, { mdbLineChart } from './components/ChartLine';
import PieChart, { mdbPieChart } from './components/ChartPie';
import PolarChart, { mdbPolarChart } from './components/ChartPolar';
import RadarChart, { mdbRadarChart } from './components/ChartRadar';
import BubbleChart, { mdbBubbleChart } from './components/ChartBubble';
import ScatterChart, { mdbScatterChart } from './components/ChartScatter';
import HorizontalBarChart, { mdbHorizontalBarChart } from './components/ChartHorizontalBar';
import Collapse, { mdbCollapse } from './components/Collapse';
import Column, { mdbCol } from './components/Col';
import Container, { mdbContainer } from './components/Container';
let Datatable = require('./components/Datatable').default;
let mdbDatatable = require('./components/Datatable').default;
let Dropdown = require('./components/Dropdown').default;
let mdbDropdown = require('./components/Dropdown').default;
let Input = require('./components/Input').default;
let mdbInput = require('./components/Input').default;
import DropdownItem, { mdbDropdownItem } from './components/DropdownItem';
import DropdownMenu, { mdbDropdownMenu } from './components/DropdownMenu';
import DropdownToggle, { mdbDropdownToggle } from './components/DropdownToggle';
import EdgeHeader, { mdbEdgeHeader } from './components/EdgeHeader';
import Fa, { mdbIcon } from './components/Fa';
import Footer, { mdbFooter } from './components/Footer';
import FormInline, { mdbFormInline } from './components/FormInline';
import GoogleMap, { mdbGoogleMap } from './components/GoogleMap';
import Jumbotron, { mdbJumbotron } from './components/Jumbotron';
import ListGroup, { mdbListGroup } from './components/ListGroup';
import ListGroupItem, { mdbListGroupItem } from './components/ListGroupItem';
import MdMask, { mdbMask } from './components/Mdmask';
import Media, { mdbMedia } from './components/Media';
import MediaBody, { mdbMediaBody } from './components/MediaBody';
import MediaImage, { mdbMediaImage } from './components/MediaImage';
import Modal, { mdbModal } from './components/Modal';
import ModalBody, { mdbModalBody } from './components/ModalBody';
import ModalFooter, { mdbModalFooter } from './components/ModalFooter';
import ModalHeader, { mdbModalHeader } from './components/ModalHeader';
import ModalTitle, { mdbModalTitle } from './components/ModalTitle';
import MdTextarea, { mdbTextarea } from './components/MdTextarea';
import Navbar, { mdbNavbar } from './components/Navbar';
import NavbarBrand, {mdbNavbarBrand} from './components/NavbarBrand';
import NavbarCollapse, { mdbNavbarToggler } from './components/NavbarCollapse';
import NavbarItem, { mdbNavItem } from './components/NavbarItem';
import NavbarNav, { mdbNavbarNav } from './components/NavbarNav';
import NumericInput, { mdbNumericInput } from './components/NumericInput';
import PageItem, { mdbPageItem } from './components/PageItem';
import PageNav, { mdbPageNav } from './components/PageNav';
import Pagination, { mdbPagination } from './components/Pagination';
import Popover, { mdbPopover } from './components/Popover';
import Progress, { mdbProgress } from './components/Progress';
import Row, { mdbRow } from './components/Row';
import Tabs, { mdbTabs } from './components/Tabs';
import Tab, { mdbTab } from './components/Tab';
import TabContent, { mdbTabContent } from './components/TabContent';
import TabItem, { mdbTabItem } from './components/TabItem';
import TabPane, { mdbTabPane } from './components/TabPane';
import Tbl, { mdbTbl } from './components/Table';
import TblBody, { mdbTblBody } from './components/TableBody';
import TblHead, { mdbTblHead } from './components/TableHead';
import Tooltip, { mdbTooltip } from './components/Tooltip';
import ViewWrapper, { mdbView } from './components/ViewWrapper';
import waves from './mixins/waves';
import mdbClassMixin from './mixins/mdbClassMixin';
import animateOnScroll from './directives/AnimateOnScroll';
import Scrollbar, { mdbScrollbar } from './components/Scrollbar';
import StretchedLink, { mdbStretchedLink } from './components/StretchedLink';
import ToastNotification, { mdbToastNotification } from './components/ToastNotification';
import Masonry, { mdbMasonry } from './components/Masonry';
import MasonryItem, { mdbMasonryItem } from './components/MasonryItem';

export {
  // FREE
  Accordion,
  AccordionPane,
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Btn,
  BtnGroup,
  BtnToolbar,
  Card,
  CardAvatar,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  CardUp,
  Carousel,
  CarouselCaption,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselNavigation,
  BarChart,
  DoughnutChart,
  LineChart,
  PieChart,
  PolarChart,
  RadarChart,
  BubbleChart,
  ScatterChart,
  HorizontalBarChart,
  Container,
  Collapse,
  Column,
  Datatable,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  EdgeHeader,
  Fa,
  Footer,
  FormInline,
  GoogleMap,
  Input,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  MdMask,
  MdTextarea,
  Media,
  MediaBody,
  MediaImage,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarItem,
  NavbarNav,
  NumericInput,
  PageItem,
  PageNav,
  Pagination,
  Popover,
  Progress,
  Row,
  Tabs,
  Tab,
  TabContent,
  TabItem,
  TabPane,
  Tbl,
  TblBody,
  TblHead,
  Tooltip,
  ViewWrapper,
  waves,
  mdbClassMixin,
  animateOnScroll,
  Scrollbar,
  StretchedLink,
  ToastNotification,
  Masonry,
  MasonryItem,

  // MDB FREE
  mdbAccordion,
  mdbAccordionPane,
  mdbAlert,
  mdbBadge,
  mdbBreadcrumb,
  mdbBreadcrumbItem,
  mdbBtn,
  mdbBtnGroup,
  mdbBtnToolbar,
  mdbCard,
  mdbCardAvatar,
  mdbCardBody,
  mdbCardFooter,
  mdbCardGroup,
  mdbCardHeader,
  mdbCardImage,
  mdbCardText,
  mdbCardTitle,
  mdbCardUp,
  mdbCarousel,
  mdbCarouselCaption,
  mdbCarouselControl,
  mdbCarouselIndicator,
  mdbCarouselIndicators,
  mdbCarouselInner,
  mdbCarouselItem,
  mdbBarChart,
  mdbDoughnutChart,
  mdbLineChart,
  mdbPieChart,
  mdbPolarChart,
  mdbRadarChart,
  mdbBubbleChart,
  mdbScatterChart,
  mdbHorizontalBarChart,
  mdbCol,
  mdbCollapse,
  mdbContainer,
  mdbDatatable,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbEdgeHeader,
  mdbIcon,
  mdbInput,
  mdbFooter,
  mdbFormInline,
  mdbGoogleMap,
  mdbJumbotron,
  mdbListGroup,
  mdbListGroupItem,
  mdbMask,
  mdbMedia,
  mdbMediaBody,
  mdbMediaImage,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbNumericInput,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavItem,
  mdbPageItem,
  mdbPageNav,
  mdbPagination,
  mdbPopover,
  mdbProgress,
  mdbRow,
  mdbTabs,
  mdbTab,
  mdbTabContent,
  mdbTabItem,
  mdbTabPane,
  mdbTbl,
  mdbTblBody,
  mdbTblHead,
  mdbTextarea,
  mdbTooltip,
  mdbView,
  mdbScrollbar,
  mdbStretchedLink,
  mdbToastNotification,
  mdbMasonry,
  mdbMasonryItem,
};