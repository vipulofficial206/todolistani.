const container = document.querySelector('.container');
        const viewBtn = document.querySelector('.view-btn');
        const addBtn = document.querySelector('.add-btn');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
        const addForm = document.querySelector('.add-task form');
        
        let tasks = []; // Array to hold task data

        // Toggle between add and view panels
        viewBtn.addEventListener('click', () => {
            container.classList.add('active');
            renderTasks();
        });

        addBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });

        // Handle form submission
        addForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const task = taskInput.value.trim();
            if (task) {
                tasks.push(task); // Add new task to array
                taskInput.value = ''; // Clear input field
                renderTasks();
            }
        });

        // Render task list dynamically
        function renderTasks() {
            taskList.innerHTML = ''; // Clear current list
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${task} <button onclick="removeTask(${index})">Remove</button>`;
                taskList.appendChild(li);
            });
        }

        // Remove task from list
        function removeTask(index) {
            tasks.splice(index, 1); // Remove task from array
            renderTasks(); // Re-render task list
        }