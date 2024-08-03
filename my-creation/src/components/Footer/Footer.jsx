import React, {useState} from'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const [activeButton, setActiveButton] = useState(null);

    const buttons = ['Try', 'Me', 'Now', 'I', 'Am', 'Better'];

    return(
        <div className='footers'>
        <div className='buttonsFooterWrapper'>
            {buttons.map(button => (
                <button 
                    
                    key={button}
                   
                    className={activeButton === button ? 'active-button buttonsFooter' : 'buttonsFooter'}
                    onClick={() => setActiveButton(button)}
                >
                    {button}
                </button>
            ))}
    
        </div>  
                <Link to='/About'>About</Link>  
                <style>
                    {`  .footers{
                         width: 100%;
                         display: flex;
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          align-items: center;
                          background-color: #f1f1f1;
                          padding: 20px;
                          margin-top: 20px;
                        }
                        .buttonsFooterWrapper{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                        }
                        .buttonsFooter{
                            margin: 10px;
                            border-radius: 4px;
                
                            cursor: pointer;
                    
                        }
                        .active-button{
                            background-color: blue;
                            
                           
                        }
                        
                    `}
                    
                </style>
                </div>
    );
}
export default Footer;