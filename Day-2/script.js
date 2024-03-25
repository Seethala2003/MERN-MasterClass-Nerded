let customers = [];

function addCustomer() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let membership = document.getElementById("membership").value;
    
    // Check if name and contact are not empty
    if (name.trim() === "" || contact.trim() === "") {
        alert("Please enter both name and contact information.");
        return;
    }
    
    let customer = {
        name: name,
        contact: contact,
        membership: membership
    };
    
    customers.push(customer);
    displayCustomers();

    // Reset the input fields
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("membership").value = "basic";
}



function displayCustomers() {
    let customerList = document.getElementById("customerList");
    customerList.innerHTML = "";
    
    customers.forEach(function(customer, index) {
        let li = document.createElement("li");
        li.innerHTML = `${customer.name} - ${customer.contact} - ${customer.membership} <input type="checkbox" id="customer${index}" value="${index}">`;
        customerList.appendChild(li);
    });
}

function deleteCustomer() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        let index = checkbox.value;
        customers.splice(index, 1);
    });
    displayCustomers();
}
