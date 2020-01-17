export type MAINSTATE = { tasks: TODO[]; filter: E_FILTERTASK };

export type TODO = { id: number; title: string; status: boolean };

export type ON_TODO = {
  onEditTask: (id: number, value: string) => void;
  onDeleteTask: (id: number) => void;
  onChangeStatusTask: (id: number, status: boolean) => void;
};

export type TASKLIST = {
  rows: TODO[];
  filter: E_FILTERTASK;
};

export type FILTERTASK = {
  rows: TODO[];
  filter: E_FILTERTASK;
};

export type ON_FILTERTASK = {
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
};

export enum E_FILTERTASK {
  All = "All",
  Active = "Active",
  Completed = "Completed"
}
