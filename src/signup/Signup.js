import React from 'react';
import 'bulma/css/bulma.css';
import './Signup.css';

import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/Coolbutton';

const SignUp = () => {
    return (
        <div>
            <div className="form-container">
                    <FormField label="name" type="text" placeholder="Rob" />
                    <FormField label="email" type="email" placeholder="rob@gmail.com" />
                    <FormField label="Password" type="password" placeholder="Enter password" />
                    <CoolButton isSuccess className="is-rounded">Log in</CoolButton>

                
            </div>
        </div>
    )
}

export default SignUp