export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    addTask(title: string) {
        const task: Task = { id: this.nextId++, title, completed: false };
        this.tasks.push(task);
        console.log(`✅ Task added: "${title}"`);
    }

    listTasks() {
        console.log("\n📋 Task List:");
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            this.tasks.forEach(task => {
                const status = task.completed ? "✔" : "✖";
                console.log(`${task.id}. [${status}] ${task.title}`);
            });
        }
        console.log("");
    }

    completeTask(id: number) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`✅ Task completed: "${task.title}"`);
        } else {
            console.log(`❌ Task with id ${id} not found.`);
        }
    }

    deleteTask(id: number) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index >= 0) {
            const removed = this.tasks.splice(index, 1)[0];
            console.log(`🗑 Task deleted: "${removed.title}"`);
        } else {
            console.log(`❌ Task with id ${id} not found.`);
        }
    }
}
