import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ count }) => {
  return (
    <>
      <div className="cards">
        <div className="cards-item">
          
            <div className="card">
              <div className="card-body">
                <div>
                  {count > 0 ? (
                    <h5 className="card-title">
                      Your balance: {count.toFixed(4)}
                    </h5>
                  ) : (
                    <h5 className="card-title">
                      If you want to make money, press <strong>Earn</strong>
                    </h5>
                  )}
                  
                </div>
                {/* <Link to="create" className="card-link">
                <p className="card-text">Create your own account</p>
                </Link> */}
              </div>
            </div>
          
        </div>
      </div>

      <style>
        {
            `
            .card-title{
                color: red;
                font-size: 20px;
            }
            `
        }
      </style>
    </>
  );
};

export default Cards;
