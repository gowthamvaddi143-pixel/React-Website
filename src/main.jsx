import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Login } from './components/login/login.jsx'
import { User } from './components/login/User-login.jsx'
import { Databinding } from './components/data-binding/data-binding.jsx'
import { DataBindingArray } from './components/data-binding/data-binding-array.jsx'
import { OptionalChaining } from './components/demo/object.jsx'
import { MyDate } from './components/date-typ/date.jsx'
import { Ajax } from './components/data-binding/data-binding-array-iphone.jsx'
import { AxiosAjax } from './components/data-binding/axios.jsx'
import { Weather } from './components/data-binding/Weathe.jsx'
import { FakeStoreApiCard } from './components/fakestore-api/fakestore-api-card.jsx'
import { FakestorteApiTable } from './components/fakestore-api/fakestore-api-table.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { EvenetOnChenge } from './components/event-demo/event-onchenge.jsx'
import { MouseOver } from './components/Mouse-over/mouse-over.jsx'
import { MouseDown } from './components/mouse-demo/mouse-demo.jsx'
import { MouseMove } from './components/mouse-demo/mouse-move.jsx'
import { KeyBoardDemo } from './components/keyBoard-or-button-events/key-demo.jsx'
import { EmiCalculator } from './components/emi-calculator/emi-calculator.jsx'
import { ButtonEvents } from './components/keyBoard-or-button-events/button-event.jsx'
import { DebounceDemo } from './components/Debounce-demo/Debounce-demo.jsx'
import { ThrottleStopWatch} from './components/Throttle/throttle.jsx'
import { SlideShow } from './components/slide-show/slide-show.jsx'
import { StopWatch } from './components/Throttle/stopwatch.jsx'
import { FormDemo } from './components/Form-Demo/traditional approach.jsx'
import { FormDataGet } from './components/Form-Demo/handiling-form-data.jsx'
import { FormUseRef } from './components/Form-Demo/useRed-from-demo.jsx'
import { FormikValidations } from './components/Form-Demo/Formik.jsx'
import { FormikDemo } from './components/formik-demo/formik-demo.jsx'
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo.jsx'
import { FomikComponents } from './components/formik-demo/Formik-components-demo.jsx'
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx'
import { ConditionSignin } from './components/condition-demo/condition-demo-1.jsx'
import { NavBar } from './Controlled-components/navbar.jsx'
import { ControlledDemo } from './components/demo.jsx'
import { ContextDemo } from './Controlled-components/context-demo.jsx'
import { ShoppingIndex } from './shopping/shopping-index.jsx'
import { TutorialIndex } from './tutorial/tutorial-index.jsx'
import { FakestoreIndex } from './fakestore/fakestore-index.jsx'
import { Hover } from './my practies/hover.jsx'
import { CookiesProvider } from 'react-cookie'
import {  BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AseDseTask from './task/task.jsx'
import { HooksDemo } from './components/hooks-demo/hooks demo.jsx'
import { ReducerDemo } from './components/reducer-demo/reducer.jsx'
import { AdminLogin } from './class-componentes/admin-login.jsx'


createRoot(document.getElementById('root')).render(

   
   
  <CookiesProvider>
    <AdminLogin/>
  </CookiesProvider>
   
  
 
)
