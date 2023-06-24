import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: 'https://realtimedata1-e0fa8-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const dataInDatabase = ref(database, 'dataList')
console.log(app)

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-data');
const dataDisplayEl = document.getElementById('display-data')

addButtonEl.addEventListener('click', function () {
    const data = inputFieldEl.value;
    if (data.length == '0') {
        alert('Input Data in Data field')
    } else {
        addDataToDisplay()
        clearDataField()
    }

})

function addDataToDisplay() {
    const data = inputFieldEl.value;
    dataDisplayEl.innerHTML += `<li>${data}</li>`
}

function clearDataField() {
    inputFieldEl.value = '';

}

