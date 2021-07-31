import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';


function Review() {

    const ref = firebase.firestore().collection("persons");
    const [persons, setPersons] = useState([]);
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");

   

    const addComment = () => {
        let today = new Date();
        if (name.trim().length <= 0) {
            setName("Anonymous")
        }
        if (comment === "" || comment.trim().length < 2) {
            alert("Make sure you have added a comment!");
        } else {
            const data = {
                name: name,
                date: (today.getMonth() + 1).toString() + "/" + today.getDate().toString() + "/" + today.getFullYear().toString(),
                comment: comment
            }
            ref.add(data);
            document.getElementById("name").value = ""
            document.getElementById("comment").value = ""
        }
    }

    const onCommentChange = (event) => {
        setComment(event.target.value)
    }

    const onNameChange = (event) => {
        setName(event.target.value)
    }



    useEffect(() => {

        const getPersons = () => {
            ref.onSnapshot((querySnapShot) => {
                const items = [];
                querySnapShot.forEach((doc) => {
                    items.push(doc.data());
                })
                setPersons(items);                
            });
           
        }

        getPersons();
       
    }, []);




    return (
        <div className='mt-5 '>
            <h1 className=" text-white d-flex flex-row justify-content-center">Comments from Customers</h1>
            <p className="text-white">**Scroll to the bottom to leave a comment**</p>

            {/* customer reviews */}
            <div className="d-flex justify-content-center">
                <div className='border border-4 border-light py-5 d-flex justify-content-center review'>
                    <div className="justify-content-center">

                        {persons.map((person) => (
                            <div key={person.name} className="card d-flex flex-row justify-content-center mt-5 mx-3">
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{person.date}</h6>
                                    <p className="card-text">{person.comment}</p>
                                    <p> {person.uid}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* add a review pane */}
            <div className="d-flex flex-row mb-3  justify-content-center mt-5">
                <input type="text" className="form-control reviewInput" id="name" placeholder="Enter your name" onChange={onNameChange} />
            </div>

            <div className="d-flex flex-row mb-3 justify-content-center">
                <textarea className="form-control reviewInput" id="comment" placeholder="Enter your comment" rows="5" onChange={onCommentChange}></textarea>
            </div>

            <div className="d-flex flex-row mb-3 justify-content-center">
                <button className="btn btn-light" onClick={() => addComment()}>Submit</button>
            </div>





        </div>
    );

}

export default Review;