
vare db = firebase.firestore();

function saveRecepies(event)  {

    event.preventDefault();

    var currentRecepie = Object.clone(recepie);

    var name = $('name').val();
    var people = $('#Npersone').val();
    var preparationTime = $('#Tempoprep').val();
    var cookingTime = $('#Tempocot').val();
    var difficulty = $('#diff').val();
    var cost = $('#costo').val();
    var description = $('#procedimento').val();
    console.log(name);

    db.collection('recepies').doc().set(currentRecepie).
    

    return false;
}