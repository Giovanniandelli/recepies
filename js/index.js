// Get a reference to the database service
var db = firebase.database();

db.collection("recepies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        console.log( doc.data() );
    });
});