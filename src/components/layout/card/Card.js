import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import {imgRequestpost} from "../../../_helpers/axios"

import "./Card.css";

const Stories = ({posts}) => {

    const { _id,referenceNumber, photo, title, location, closingDate , story , datePost} = posts 

    console.log(posts.location)

        return (
            <div>
                <ul className="stories">
                    {/* {stories.map(posts => ( */}
                        <li key={referenceNumber}>
                            <Card className="storyCard d-flex flex-row align-content-center m-2">
                                <Card.Img className="featureImage" src={imgRequestpost+photo} />
                                <Card.Body>
                                    <div className="d-flex flex-row justify-content-between mb-3">
                                        <small className="featureDate">{`${datePost}`}</small>
                                        <small className="featureCity">{`${location}`}</small>
                                    </div>
                                    <a href={"#" + _id}>
                                        <Card.Title className="featureTitle mb-1">{`${title}`}</Card.Title>
                                    </a>

                                    <Card.Text className="featureContent">{`${story}`}</Card.Text>
                                </Card.Body>
                            </Card>
                        </li>
                    {/* ))} */}
                </ul>    
            </div>
        )
}

export default Stories
