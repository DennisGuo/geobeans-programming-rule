import App from './components/app';
import Doc from './components/doc/doc';
import NotFound from './components/not-found'

import docs from './config/docs';

const routes = {
    path: "/",
    component: App,
    childRoutes: [{
            path: "/doc/:type(/:name)",
            component: Doc,
            onEnter: ({ params }, replace) => {
                console.log(params);
                let type = params.type,
                    name = params.name,
                    first = docs[0];

                if (!type) {
                    type = first.type;
                }

                let typeObj = docs.filter((item) => item.type === type)[0];
                let typeDocs = typeObj.docs;

                if (!name && typeDocs.length > 0) {
                    name = typeObj.docs[0].file;
                    replace('/doc/' + type + "/" + name);
                } else if (name) {
                    if (typeDocs.filter((item) => item.file === name).length === 0) {
                        replace('/404')
                    }
                }
            }

        },
        {
            path: '404',
            component: NotFound
        }
    ]
}

export default routes;