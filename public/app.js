const auth = firebase.auth();

const whenSignedIn =  document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn =  document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const recipeBtn = document.getElementById('recipesBtn');

const addItemBtn = document.getElementById('addItem');



const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged( user => {

    if(user){
        whenSignedIn.hidden = false; 
        whenSignedOut.hidden = true; 
        recipeBtn.hidden = false; 
        signInBtn.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3>`
        
        

    } else{
        whenSignedIn.hidden = true; 
        whenSignedOut.hidden = false; 
        signInBtn.hidden = false;
        userDetails.innerHTML = '';
        recipeBtn.hidden = true;
    }
});


const db = firebase.firestore();

const createThing = document.getElementById('addItem');
const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;
let userInput;  //User input from textbox
let userQuant;

auth.onAuthStateChanged( user => {

    if(user){
        
        thingsRef = db.collection('Ingredients'); //Grabs the db
        
        createThing.onclick = () => {

            userInput = document.getElementById("itemTB").value; //Grabs value from Textbox 
            userQuant = document.getElementById('quant').value;

            const {serverTimestamp} = firebase.firestore.FieldValue;

            thingsRef.add({
                uid: user.uid,          //Adds userId
                name: userInput,        //Adds item to the database 
                quantity: userQuant,    //Adds quantity of ingredients
                createdAt: serverTimestamp(), //Time created
            })
        }

        unsubscribe = thingsRef
            .where('uid', '==', user.uid)
            .orderBy('createdAt')
            .onSnapshot(querySnapshot => {
                
                // Map results to an array of li elements

                const items = querySnapshot.docs.map(doc => {

                    return `<li>${ doc.data().quantity + "     " + doc.data().name  }<input type = "checkbox" class = "${doc.data().name}"id="selectedItem"></li>`

                });
                
                items.reverse();
                //console.log(items);
                thingsList.innerHTML = items.join('');
                

            }); 
    } else{
        unsubscribe && unsubscribe();
    }
});






