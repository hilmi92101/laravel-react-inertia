import { router } from '@inertiajs/react';

export const goToRoute = (routeName) => {
    router.visit(route(routeName), { method: 'get' });
};

export const someOtherFunction = () => {
    console.log('great, it works!!')
};
