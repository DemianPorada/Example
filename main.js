const formEl = document.querySelector('#contactsForm')
const contactsList = document.querySelector('#contactsList')
formEl.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const newClient = {
        name:event.currentTarget.elements.name.value,
        telNum: event.currentTarget.elements.name.value
    }
    contactsList.insertAdjacentHTML('beforeend', createContactMarkup(newClient))
    localStorage.setItem("contact", JSON.stringify(newClient))
    console.log(event);
}

function createContactMarkup(newCont) {
    return `
    <li>
    <p>${newCont.name}</p>
    <p>${newCont.number}</p>
    </li>
    `
}
function renderContact(contacts) {

}
function getContactsFromLocalStorage(key) { }