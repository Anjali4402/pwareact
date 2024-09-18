import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useTranslation } from 'react-i18next';

const ScannerReader = () => {

    const { t } = useTranslation();

    const [scanResutl, setScanResult] = useState(null);


    const [userDetails, setUserDetails] = useState({
        username: '',
        mobile: '',
        id: ''
    });

    // Convert userDetails object to an array of entries
    const userDetailsArray = Object.entries(userDetails);


    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserDetails((oldval) => {
            return {
                ...oldval,
                [name]: value
            };
        });
    };

    useEffect(()=> {


        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height : 250
            },
            fps : 5,
        })
    
        scanner.render(success, error);
    
        function success(result){
            console.log("QR code found");
            scanner.clear();
            setScanResult(result)
    
        }
    
        function error (err){
            console.log("QR code not found");
            console.warn(err)
        }

    },[])

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    // if we have data after scan document
    useEffect(()=>{
        if(scanResutl){


            const data = scanResutl;

            // Parse the query string
            const params = new URLSearchParams(data);
            
            // Extract values
            const username = params.get('username');
            const mobile = params.get('mobile');
            const id = params.get('id');

        
            setUserDetails({
                username : username,
                mobile : mobile,
                id : id
            })


        }
    },[scanResutl])


  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <h1>{t('qrcodescan')}</h1>
        {
            scanResutl ?
            <div>
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


<div>
<div>
            <h3 style={{marginTop: '2rem'}}>User Details</h3>
            <ul>
                {userDetailsArray.map(([key, value]) => (
                    <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
</div>
</div>
            :
            <div id='reader' style={{width: '90%', marginTop: '3rem', margin:'auto'}}></div>
        }
        


    </div>
  )
}

export default ScannerReader