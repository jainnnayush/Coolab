import './login.css';
import { useMsal } from '@azure/msal-react';

export default function Login({course}){
    const { instance } = useMsal();    
    const initializeSignIn = () => {
        try{
            instance.loginPopup()    
            console.log("loginPopup called");
        }
        catch(error){
            console.log(error);
        
        }
    };
  
    return(
        <div className='body_login' onClick={initializeSignIn}>
            <div class="background-image_login"></div>
 
            <button class="microsoft-button_login">
            <img src={ require('./Microsoft_logo.png') } />     
Sign in with microsoft
            </button>

        </div>

    )
}



