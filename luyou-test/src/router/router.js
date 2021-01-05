import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import Newly from "@/components/Newly";
import Newly2 from "@/components/Newly2";
import newly3 from "@/components/newly3";

Vue.use(VueRouter)

const routes=[
    {
        path:'/helloworld',
        component:HelloWorld,
        children:[
            {
                path:'newly/:name',
                name:'newly',
                component:Newly
            },
            {
                path: 'newly2/:name',
                component: Newly2
            },
        ]
    },
    {
        path:'/newly3',
        component:newly3
    }
]

const router=new VueRouter({
    routes
});

export default router