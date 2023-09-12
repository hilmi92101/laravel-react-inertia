import { goToRoute, someOtherFunction } from '@/Modules/Helpers';

const Card1 = ({ text, route }) => (
    <div
        onClick={() => goToRoute(route)}
        className="bg-white rounded-lg shadow-lg overflow-hidden mt-4"
    >
        <div className="p-4">
            <div className="font-bold text-xl">{text}</div>
        </div>
    </div>
);

export default Card1;
