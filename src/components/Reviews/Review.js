import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';


function Review() {

    const ref = firebase.firestore().collection("persons");
    const [persons, setPersons] = useState([]);

    function addPerson(){
        console.log("clicked")
        const data = {           
            name: document.getElementById("name").value,           
            date: new Date().toISOString().slice(0,10),
            comment:  document.getElementById("comment").value
        }
        ref.add(data);
        document.getElementById("name").value = ""
        document.getElementById("comment").value = ""
    }
    
    function getPersons() {
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            })
            setPersons(items);
        });
    }

    useEffect(() => {
        getPersons();
    }, []);

    let data = persons.reverse();

    return (
        <div className='mt-5 '>
            <h1 className=" text-white d-flex flex-row justify-content-center">Comments from Customers</h1>
            <p className="text-white">**Scroll to the bottom to leave a comment**</p>

             {/* customer reviews */}
             <div className="d-flex justify-content-center">
            <div className='border border-4 border-light py-5 d-flex justify-content-center review'>
            <div className="justify-content-center">
               
                {data.map((person) => (
                    <div class="card d-flex flex-row justify-content-center mt-5 mx-3">
                        <div class="card-body">
                            <h5 class="card-title">{person.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{person.date}</h6>
                            <p class="card-text">{person.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>

                    {/* add a review pane */}
            <div className="d-flex flex-row mb-3  justify-content-center mt-5">
                <input type="text" className="form-control reviewInput" id="name" placeholder="Enter your name" />
            </div>

            <div className="d-flex flex-row mb-3 justify-content-center">
                <textarea className="form-control reviewInput" id="comment" placeholder="Enter your comment" rows="5"></textarea>
            </div>

            <div className="d-flex flex-row mb-3 justify-content-center">
                <button className="btn btn-light" onClick={()=>addPerson()}>Submit</button>
            </div>
           
            

           

        </div>
    );

}

export default Review;