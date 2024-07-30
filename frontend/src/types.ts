export interface Task {
    id: number;
    name: string;
    description: string;
    status: string;
    project: number;
    assigned_to: number;
    due_date: Date;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
}

export interface Credentials {
    username: string;
    password: string;
}
