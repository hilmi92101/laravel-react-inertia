// this card component support children

import { goToRoute, someOtherFunction } from '@/Modules/Helpers';

export const Card3 = ({ text, route, children }) => (
    
    <a onClick={() => goToRoute(route)} className="relative block p-4 overflow-hidden border bg-white border-slate-100 rounded-lg shadow-md mt-5" href="#">
        <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="justify-between sm:flex">
            <div>
                <h5 className="text-xl font-bold text-slate-900">{text}</h5>
                { children }
            </div>
        </div>
    </a>
);

