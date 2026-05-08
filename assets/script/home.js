'use-strict';

if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "./home.html";
}

const usersContainer = document.getElementById("randomUsers");

async function loadUsers() {

  try {

    const response =
      await fetch("https://randomuser.me/api/?results=10&seed=same&nat=CA");

    const data = await response.json();

    const users = data.results;

    users.forEach(user => {

      const userCard = document.createElement("div");

      userCard.classList.add("user-box");

      userCard.innerHTML = `
        <img src="${user.picture.medium}" alt="user">

        <div>
          <h4>
            ${user.name.first} ${user.name.last}
          </h4>

          <p>${user.location.city}</p>
        </div>
      `;

      usersContainer.appendChild(userCard);

    });

  } catch (error) {

    usersContainer.innerHTML =
      "<p>Unable to load users.</p>";

  }
}

loadUsers();