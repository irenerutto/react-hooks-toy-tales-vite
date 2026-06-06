🧸 Toy Tales

A React single-page application (SPA) for managing a collection of toys. Users can view toys, add new toys, like toys, and delete toys using a mock backend API.

---
📌 Features
View all toys on page load
Add a new toy using a form
Like a toy to increase its like count
Delete (donate) a toy from the collection
Dynamic UI updates using React state

---
🛠️ Built With
React
JavaScript (ES6+)
JSON Server (mock backend)
HTML & CSS

---
How It Works
🔹 Load Toys

Toys are fetched from the backend using useEffect when the app loads.

🔹 Add Toy

A form sends a POST request to add a new toy with 0 likes.

🔹 Like Toy

Clicking the like button sends a PATCH request to update likes.

🔹 Delete Toy

Clicking donate removes the toy using a DELETE request.

---
👩‍💻 Author

Created as part of a React CRUD lab project.
