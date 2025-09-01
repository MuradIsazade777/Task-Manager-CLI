import * as readline from "readline";
import { TaskManager } from "./taskManager";

const taskManager = new TaskManager();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("📝 Welcome to Task Manager CLI!");
console.log("Commands: add, list, complete, delete, exit");

const prompt = () => {
    rl.question("> ", (input: string) => {
        const [command, ...args] = input.split(" ");
        switch (command) {
            case "add":
                const title = args.join(" ");
                if (title) taskManager.addTask(title);
                else console.log("❌ Please provide a task title.");
                break;
            case "list":
                taskManager.listTasks();
                break;
            case "complete":
                const completeId = Number(args[0]);
                if (!isNaN(completeId)) taskManager.completeTask(completeId);
                else console.log("❌ Please provide a valid task id.");
                break;
            case "delete":
                const deleteId = Number(args[0]);
                if (!isNaN(deleteId)) taskManager.deleteTask(deleteId);
                else console.log("❌ Please provide a valid task id.");
                break;
            case "exit":
                rl.close();
                return;
            default:
                console.log("❌ Unknown command.");
        }
        prompt();
    });
};

prompt();
