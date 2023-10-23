import React, { useState } from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import Header3 from '@/Components/TailwindComponents/Header3';
import Container1 from '@/Components/TailwindComponents/Container1';

const UseStateComponent = () => {

    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    };

    const [user, setUser] = useState({ name: 'John', age: 30 });
    const handleNameChange = (event) => {
        setUser({ ...user, name: event.target.value });
    };
    const handleAgeChange = (event) => {
        setUser({ ...user, age: event.target.value });
    };

    return (
        <Layout>
            <Header3 text='Example: UseState Component' />

            <Container1>

                <h1 className="text-3xl font-extrabold mb-4">
                    Example 1:
                </h1>
                <p>Count: {count}</p>
                <div className="flex space-x-4 mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increaseCount}>
                        Increase Count
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decreaseCount}>
                        Decrease Count
                    </button>
                </div>

                <h1 className="text-3xl font-extrabold mb-4">
                    Example 2:
                </h1>
                <div>

                    <label className="block">
                        Name:
                        <input
                            type="text"
                            value={user.name}
                            onChange={handleNameChange}
                            className="block w-full border border-gray-300 p-2 rounded"
                        />
                    </label>
                    <br />
                    <label className="block">
                        Age:
                        <input
                            type="number"
                            value={user.age}
                            onChange={handleAgeChange}
                            className="block w-full border border-gray-300 p-2 rounded"
                        />
                    </label>
                    <br />
                    <p className="text-lg font-semibold mt-4">User Info:</p>
                    <p className="mb-2">Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>




            </Container1>



        </Layout>
    );
};

export default UseStateComponent;