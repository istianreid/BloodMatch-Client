import React , {useEffect , useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Explore.css";

import data from "../../../data.json";
import Stories from "../../layout/card/Index";
import Filter from '../../layout/filter/Index';

import {userActions , profileActions , requestPostActions } from '../../../_actions'
import { useDispatch, useSelector} from "react-redux";
import Loading from '../../layout/loader/Loading';


const Explore = () =>{


    const [loading, setLoading] = useState();
    const [done, setDone] = useState();


    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const postData = useSelector((state) => state.post);
    const {isAuthenticated} = auth;
    const {posts} = postData

    setTimeout(() => {
        setLoading(true)
        setTimeout(() => {
          setDone(true)
        }, 2500)
      }, 3000);


    useEffect(() => {

        if (isAuthenticated === true ) {
            dispatch(requestPostActions.allRequestPostAction())
        }
    
    }, [isAuthenticated , posts]);
 

    const storiesStatus = (event) => {
        console.log(event.target.value)
        
    }

    const storiesHospital = (event) => {
        console.log(event.target.value)
        
    }

    const storiesLocation = (event) => {
        console.log(event.target.value)
        
    }


    return (
        <>
            <Container>
                <Row>
                    <Col className="exploreTitle d-flex flex-column">
                        <h6 className="exploreMain">Explore</h6>
                        <h1 className="exploreSub">The blood you donate gives someone another chance at life.</h1>
                    </Col>
                </Row>

                <Row>
                    <Filter resort={posts} 
                    storiesStatus={posts.status}
                    storiesHospital={posts.Hospital}
                    storiesLocation={posts.location}

                />
                </Row>

                <Row>


                
                    <div className="content explorePage">
                        <div className="main storiesContainer">

                        {!done ? (
                     <Loading loading = {loading} />

                            ) : (posts.map(posts => (<Stories className="storiesCard" key={posts._id} posts={posts}/>))

                    )}

                        </div>
                    </div>    
                </Row>

            </Container>
        </>
    )
    
}

export default Explore;
