import React, { useState } from 'react';

const Shipping = ({ navigate }) => {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can validate and save the shipping information
        // For example, you can send it to an API or store it in state/Redux
        // After saving, you can navigate to the next page
        navigate('/purchase/viewOrder');
    };

    return (
    <div>
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="addressLine1">Address Line 1:</label>
                <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={shippingInfo.addressLine1}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="addressLine2">Address Line 2:</label>
                <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={shippingInfo.addressLine2}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="zip">ZIP Code:</label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={shippingInfo.zip}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Continue</button>
        </form>
    </div>
    );
};

export default Shipping;
