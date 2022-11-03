import JsxValue from './ex-1026-1/JsxValue'
import Counter from './ex-1025-2/Counter'
import StudentList from './ex-1026-2/StudentList'
// import Menu from './ex-1026-3/Menu'
import Demo from './ex-1026-4/Demo'
import Parent from './ex-1027-1/Parent'
// export default的話，可以在導入(import)時直接改名稱
import ParentPropTypes from './ex-1027-2/Parent'
import ParentDataFlow from './ex-1027-3/Parent'
import InputDemo from './ex-1028-1/InputDemo'
import HTML5Form from './ex-1028-2/HTML5Form'
import Birth from './ex-1029-1/Birth'
import Bmi from './ex-1029-2/Bmi'
import BirthSelect from './ex-1031-1/BirthSelect'
import TodoApp from './ex-1031-2/TodoApp'
import MultipleInput from './ex-1101-1/MultipleInput'
import HTML5ValidForm from './ex-1102-1/HTML5ValidForm'
import Lifecycle from './ex-1102-2/Lifecycle'
import User from './ex-1102-3/User'
import FileUploadSample from './ex-1102-4/FileUploadSample'
import ImageDemo from './ex-1103-1/ImageDemo'
import UserDemo from './ex-1103-2/UserDemo'
export const examples = [
  {
    name: '1103-2 UserDemo',
    path: '/ex-1103-1/UserDemo.js',
    component: UserDemo,
  },
  {
    name: '1103-1 ImageDemo',
    path: '/ex-1103-1/ImageDemo.js',
    component: ImageDemo,
  },
  {
    name: '1102-4 ',
    path: '/ex-1102-4/FileUploadSample.js',
    component: FileUploadSample,
  },
  {
    name: '1102-3 ',
    path: '/ex-1102-3/User.js',
    component: User,
  },
  {
    name: '1102-2 生命周期方法',
    path: '/ex-1102-2/Lifecycle.js',
    component: Lifecycle,
  },
  {
    name: '1102-1 HTML5ValidForm',
    path: '/ex-1102-1/HTML5ValidForm.js',
    component: HTML5ValidForm,
  },
  {
    name: '1101-1 多個表單元素共用單一state',
    path: '/ex-1101-1/MultipleInput.js',
    component: MultipleInput,
  },
  {
    name: '1031-2 Todo待辨事項',
    path: '/ex-1031-2/TodoApp.js',
    component: TodoApp,
  },
  {
    name: '1031-1 出生年月日下拉選單',
    path: '/ex-1031-1/BirthSelect.js',
    component: BirthSelect,
  },
  {
    name: '1029-2 Bmi',
    path: '/ex-1029-1/Bmi.js',
    component: Bmi,
  },
  {
    name: '1029-1 BirthCheck',
    path: '/ex-1029-1/Birth.js',
    component: Birth,
  },
  {
    name: '1028-2 各種可控表單元件',
    path: '/ex-1028-2/HTML5Form.js',
    component: HTML5Form,
  },
  {
    name: '1028-1 可控與不可控表單元件',
    path: '/ex-1028-1/InputDemo.js',
    component: InputDemo,
  },
  {
    name: '1027-3 三種資料流',
    path: '/ex-1027-3/Parent.js',
    component: ParentDataFlow,
  },
  {
    name: '1027-2 PropTypes',
    path: '/ex-1027-2/Parent.js',
    component: ParentPropTypes,
  },
  {
    name: '1025-1 計數器',
    path: './ex-1025-1/Counter',
    component: Counter,
  },
  {
    name: '1026-1 JSX中的值與表達式',
    path: './ex-1026-1/JsxValue',
    component: JsxValue,
  },
  {
    name: '1026-2 學生列表清單(map-key)',
    path: './ex-1026-2/StudentList',
    component: StudentList,
  },
  // {
  //   name: '1026-3 Menu',
  //   path: './ex-1026-3/Menu',
  //   component: Menu,
  // },
  {
    name: '1026-4 Demo',
    path: './ex-1026-4/Demo',
    component: Demo,
  },
  {
    name: '1027-1 Parent',
    path: './ex-1027-1/Parent',
    component: Parent,
  },
]
