let employees = [];
let idCounter = 1;

document.getElementById('addUserButton').addEventListener('click', addUser);

function addUser() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const messageElement = document.getElementById('message');

    if (!name || !profession || !age) {
        messageElement.textContent = 'Error: All fields are required!';
        messageElement.className = 'message error';
        return;
    }

    const employee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    employees.push(employee);
    displayEmployees();
    
    messageElement.textContent = 'Success: Employee Added!';
    messageElement.className = 'message success';
    
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <div class="employee-info">
                <span>${index + 1}.</span>
                <span>Name: ${employee.name}</span>
                <span>Profession: ${employee.profession}</span>
                <span>Age: ${employee.age}</span>
            </div>
            <button onclick="deleteUser(${employee.id})">Delete User</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteUser(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
