import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { setUserEarnings, getUserEarnings } from "../../services/realtimeDatabaseService";
const Mains = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true); // Flag to track initial loading
  const { user } = useAuth();

  useEffect(() => {
    const fetchEarnings = async () => {
      if (user) {
        try {
          const earnings = await getUserEarnings(user.uid);
          setCount(earnings);
        } catch (error) {
          console.error("Error fetching earnings: ", error);
        } finally {
          setLoading(false); // Set loading to false once fetching is done
        }
      }
    };
    fetchEarnings();
  }, [user]);

  useEffect(() => {
    if (user && !loading) { // Only update if not loading
      try {
        setUserEarnings(user.uid, count);
      } catch (error) {
        console.error("Error setting earnings: ", error);
      }
    }
  }, [count, user, loading]);

  return (
    <div className="mains">
      <div>
        {user ? (
          <div className="mains">
            <h1>{`${count.toFixed(4)}$`}</h1>
            <div className="buttonsWrapper">
              <button
                className="buttonMoney earnButton"
                onClick={() => setCount(count + Math.random() * 2)}
              >
                Earn
              </button>
              <button
                className="buttonMoney"
                onClick={() => setCount(count - Math.random() * 2)}
              >
                Spend
              </button>
            </div>
            <Cards count={count} />
          </div>
        ) : (
          <div className="wrappeOfCardsAccConditions">
            <Link to="login" className="card-link">
              <p className="card-text"><strong>Log in to your account</strong></p>
            </Link>
            <Link to="signup" className="card-link">
              <p className="card-text"><strong>Create your own account</strong></p>
            </Link>
          </div>
        )}
      </div>
      <style>
        {`
       
          .buttonMoney {
            margin: 10px;
            padding: 10px 10px;
            font-size: 16px;
            cursor: pointer;
            background-color: lightgray; 
            border-radius: 4px;
          }
          .buttonMoney:hover {
            background-color: #f1f1f1;
          }

          .wrappeOfCardsAccConditions{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
          }

          .mains{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
          }
           
          .mains{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }


          .earnButton {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            background-color: red;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            animation: pulse 1s infinite;
        }
  
        @keyframes pulse {
            0% {
                transform: scale(1);
                background-color: red;
                color: white;
            }
            50% {
                transform: scale(1.2);
                background-color: lightcoral;
                color: darkred;
            }
            100% {
                transform: scale(1);
                background-color: red;
                color: white;
            }
        }
        `}
      </style>
    </div>
  );
};

export default Mains;
