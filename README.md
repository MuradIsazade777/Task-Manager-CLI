# Task Manager CLI

📝 **Task Manager CLI** is a simple command-line interface (CLI) application built entirely with **TypeScript**.  
It allows you to manage your daily tasks efficiently by adding, listing, completing, and deleting tasks directly from the terminal.

## Features

- Add tasks with a simple command.
- List all tasks with their status (completed or pending).
- Mark tasks as completed.
- Delete tasks by ID.
- Pure TypeScript implementation (no HTML, CSS, or frontend dependencies).
---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-manager-cli.git
Navigate to the project folder:

bash
Copy code
cd task-manager-cli
Install dependencies:

bash
Copy code
npm install
Usage
Compile TypeScript files:

bash
Copy code
npx tsc
Run the application:

bash
Copy code
npm start
or directly:

bash
Copy code
node dist/index.js
Available commands:

add <task_name> - Add a new task.

list - Show all tasks.

complete <task_id> - Mark a task as completed.

delete <task_id> - Delete a task.

exit - Exit the CLI.

Example
bash
Copy code
> add Finish TypeScript project
Task added: Finish TypeScript project

> list
1. [ ] Finish TypeScript project

> complete 1
Task completed: Finish TypeScript project

> list
1. [x] Finish TypeScript project

> delete 1
Task deleted: Finish TypeScript project
Technologies
Node.js
TypeScript
Readline (Node built-in)
---
