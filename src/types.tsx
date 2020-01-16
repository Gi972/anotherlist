export type TODO = { id: number; title: string; status: boolean };

export type ON_TODO = { onDeleteTask: (id: number) => void };
