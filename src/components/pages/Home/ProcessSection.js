import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

import Request from '../../../media/icons/search-2.svg';
import Submit from '../../../media/icons/application.svg';
import Wait from '../../../media/icons/wait.svg';
import Talk from '../../../media/icons/message.svg';

import "./ProcessSection.css";

function ProcessSection() {
    return (
        <div className="process-box process-image">
            <div className="process-title">Our Process</div>
            <div className="process-sub">Learn How You Can Save Life Using Our Program</div>
            <CardDeck className="process-deck">
                <Card className="process-card">
                    <Card.Img className="card-icon" variant="top" src={Request} />
                        <Card.Title className="card-title">Request Blood</Card.Title>
                        <Card.Text className="card-text">
                        From first seed divide had make. Deep abundantly tree tree don't 
                        don't won't face spirit stars them. Years god spirit tree their 
                        beast created fruit.
                        </Card.Text>
                </Card>
  
                <Card className="process-card">
                    <Card.Img className="card-icon" variant="top" src={Submit} />
                    <Card.Title className="card-title">Submit Your Story</Card.Title>
                    <Card.Text className="card-text">
                        From first seed divide had make. Deep abundantly tree tree don't 
                        don't won't face spirit stars them. Years god spirit tree their 
                        beast created fruit.
                    </Card.Text>
                </Card>
  
                <Card className="process-card">
                    <Card.Img className="card-icon" variant="top" src={Wait} />
                    <Card.Title className="card-title">Wait For A Qualified Blood Donor</Card.Title>
                    <Card.Text className="card-text">
                        From first seed divide had make. Deep abundantly tree tree 
                        don't don't won't face spirit stars them. Years god spirit 
                        tree their beast created fruit.
                    </Card.Text>
                </Card>

                <Card className="process-card">
                    <Card.Img className="card-icon" variant="top" src={Talk} />
                    <Card.Title className="card-title">Talk About Transaction</Card.Title>
                    <Card.Text className="card-text">
                        From first seed divide had make. Deep abundantly tree tree 
                        don't don't won't face spirit stars them. Years god spirit 
                        tree their beast created fruit.
                    </Card.Text>
                </Card>
            </CardDeck>
        </div>
    )
}

export default ProcessSection;
