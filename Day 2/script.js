document.addEventListener("DOMContentLoaded", function() {
  const customerForm = document.getElementById("customerForm");
  const customerTable = document.getElementById("customerTable");
  const addCustomerBtn = document.getElementById("addCustomerBtn");
  const nameInput = document.getElementById("name");
  const contactInfoInput = document.getElementById("contactInfo");
  const membershipTypeInput = document.getElementById("membershipType");
  const genderInput = document.getElementById("gender");

  addCustomerBtn.addEventListener("click", function() {
      addCustomer();
  });

  customerTable.addEventListener("click", function(event) {
      if (event.target && event.target.classList.contains("deleteBtn")) {
          const confirmDelete = confirm("Are you sure you want to delete this customer?");
          if (confirmDelete) {
              event.target.closest("tr").remove();
          }
      }
  });

  nameInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          contactInfoInput.focus();
      }
  });

  contactInfoInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          membershipTypeInput.focus();
      }
  });

  membershipTypeInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          genderInput.focus();
      }
  });

  genderInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          addCustomer();
      }
  });

  function addCustomer() {
      const name = nameInput.value;
      const contactInfo = contactInfoInput.value;
      const membershipType = membershipTypeInput.value;
      const gender = genderInput.value;

      if (name && contactInfo && gender) {
          const newRow = customerTable.insertRow(-1); // Insert row at the end of the table
          const cell1 = newRow.insertCell(0);
          const cell2 = newRow.insertCell(1);
          const cell3 = newRow.insertCell(2);
          const cell4 = newRow.insertCell(3);
          const cell5 = newRow.insertCell(4);

          cell1.textContent = name;
          cell2.textContent = contactInfo;
          cell3.textContent = membershipType;
          cell4.textContent = gender;
          cell5.innerHTML = '<button class="deleteBtn">Delete</button>';
          clearForm();
      } else {
          alert("Please fill in all fields.");
      }
  }

  function clearForm() {
      nameInput.value = "";
      contactInfoInput.value = "";
      membershipTypeInput.value = "basic";
      genderInput.value = ""; // Clear gender field
  }
});
