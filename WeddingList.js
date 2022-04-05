let id = 0; //every new todo will have an id that needs to be incremented

//when we click the "add" button we want to create a new row for table


document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    //set attributes
    row.setAttribute('id', `item-${id}`); //set the id
    row.insertCell(0).innerHTML = document.getElementById('new-task').value; //Todo column of table
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //date created column
    row.insertCell(2).innerHTML = document.getElementById('new-end-date').value;//completed by date
    let actions = row.insertCell(3);
    actions.appendChild(createFinishedButton(id++));
    document.getElementById('new-task').value = '';
});


//need a function for the actions button

function createCompletedButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.id = id;
    btn.innerHTML = "Complete"
    btn.onclick = () => {
        console.log(`Row with item-${id} is complete!`);
        let elementtoDelete = document.getAnimations(`item-${id}`);
        elementtoDelete.parentNode.removeChild(elementtoDelete);
    };
    return btn;
}