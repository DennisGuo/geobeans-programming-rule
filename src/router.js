import App from './components/app';
import Doc from './components/doc/doc';

const routes =  {
    path:"/",
    component:App,
    childRoutes:[
        { path:"/doc/:type(/:name)",component:Doc}
    ]
}

export default routes;