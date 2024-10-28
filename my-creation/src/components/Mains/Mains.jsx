import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import EarnButton from "./ButtonsEarnSpend/EarnButton";
import SpentButton from "./ButtonsEarnSpend/SpentButton";
import { useOutletContext, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { setUserEarnings, getUserEarnings } from "../../services/realtimeDatabaseService";

const Mains = () => {
  const { count, setCount } = useOutletContext(); // Use context from Outlet
  const [loading, setLoading] = useState(true);
  const { user, addSpentClick } = useAuth();
  const earnButtonRef = useRef(null);

  useEffect(() => {
    const fetchEarnings = async () => {
      if (user) {
        try {
          const earnings = await getUserEarnings(user.uid);
          setCount(earnings);
        } catch (error) {
          console.error("Error fetching earnings: ", error);
        } finally {
          setLoading(false); 
        }
      }
    };
    fetchEarnings();
  }, [user]);

  useEffect(() => {
    if (user && !loading) {
      try {
        setUserEarnings(user.uid, count);
      } catch (error) {
        console.error("Error setting earnings: ", error);
      }
    }
  }, [count, user, loading]);

  const resetEarnButton = () => {
    if (earnButtonRef.current) {
      earnButtonRef.current.resetCooldown(); 
    }
  };

  return (
    <div className="mains">
      <div>
        {user ? (
          <div className="mains">
            <h1>{`${count.toFixed(4)}$`}</h1>
            <div className="buttonsWrapper">
              <EarnButton ref={earnButtonRef} count={count} setCount={setCount} /> 
              <SpentButton count={count} setCount={setCount} resetEarnButton={resetEarnButton} />
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

          .wrappeOfCardsAccConditions {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
          }

          .mains {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 60px;
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





