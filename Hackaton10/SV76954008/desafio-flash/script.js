function saveUserInfo(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const user = {
        name: name,
        age: age
    };

    localStorage.setItem('userInfo', JSON.stringify(user));

    displayUserInfo();
}

function displayUserInfo() {
    const savedUser = JSON.parse(localStorage.getItem('userInfo'));

    if (savedUser) {
        document.getElementById('savedName').textContent = `Nombre: ${savedUser.name}`;
        document.getElementById('savedAge').textContent = `Edad: ${savedUser.age}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayUserInfo();

    document.getElementById('userForm').addEventListener('submit', saveUserInfo);
});
