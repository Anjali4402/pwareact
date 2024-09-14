import React, { useState } from 'react';

const QRGenerator = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        mobile: '',
        id: ''
    });

    const [qr, setQr] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserDetails((oldval) => {
            return {
                ...oldval,
                [name]: value
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails);

        setmyQR();
    };

    const setmyQR = () => {
        const queryString = new URLSearchParams(userDetails).toString();
        setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(queryString)}`);
    };

    const downloadImage = () => {
        if (qr) {
            const link = document.createElement('a');
            link.href = qr;
            link.download = 'qrcode.jpg'; // Specify the name of the file
            link.click();
        }
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
            <h1>QR Code Generator</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Enter Name:</label> <br />
                    <input type="text" id="username" name="username" value={userDetails.username} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="mobile">Enter Mobile:</label> <br />
                    <input type="text" id="mobile" name="mobile" value={userDetails.mobile} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="id">Enter ID:</label> <br />
                    <input type="text" id="id" name="id" value={userDetails.id} onChange={handleChange} required />
                </div>
                <br /> <br />

                <div>
                    <button type='submit' className='bg-green-300'>Submit</button>
                </div>
            </form>

            <div style={{ marginTop: '2rem' }}>
                <h2>QR Code will display here</h2>
                {qr && (
                    <>
                        <button onClick={downloadImage}>Click here to download QR Code</button> <br /> <br />
                        <img src={qr} alt="QR Code" />
                    </>
                )}
            </div>
        </div>
    );
};

export default QRGenerator;
