
// Singleton class to manage the database connection
export class Database {
    private static instance: Database;
    private tasks: any[]=[];
    private constructor() {}

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;

    }

    addTask(task: any) {
        this.tasks.push(task);
    }

    getTask(): any[] {
        return this.tasks;
    }


}