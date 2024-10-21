let todos = [];
let errMsg = "Todo with given id not found";
function createTodo(title, desc) {
  const newTodo = {
    id: todos.length + 1,
    title,
    desc,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

function updateTodo(id, updates) {
  const todo = todos.find((todo) => todo.id == id);
  if (!todo) throw new Error(errMsg);

  // Object.assign(todo, updates);
  Object.assign(todo, {
    title: updates?.title ?? todo.title,
    desc: updates?.desc ?? todo.desc,
    completed: updates?.completed ?? todo.completed,
  });
  return todo;
}

function deleteTodo(id) {
  const todo = todos.find((todo) => todo.id == id);
  if (!todo) throw new Error(errMsg);
  todos = todos.filter((todo) => todo.id !== id); //reset
  return todo;
}

describe("err checking todo REST funcs", () => {
  beforeEach(() => {
    todos = [];
  });

  afterAll(() => {
    todos = [];
  });

  test("adding a new todo", () => {
    let sampleTodo = {
      id: 1,
      title: "title 1",
      desc: "desc 1",
      completed: false,
    };
    createTodo(sampleTodo.title, sampleTodo.desc);
    expect(todos[0].id).toEqual(sampleTodo.id);
    expect(todos[0]).toEqual(sampleTodo);
  });

  test("update existing todo", () => {
    createTodo("title 1", "desc 1");
    const updatedTodo = { desc: "desc redo" };
    updateTodo(1, updatedTodo);
    //console.log("new todos arr", todos);
    expect(todos[0].desc).toBe(updatedTodo.desc);
  });

  test("error update ele not todo", () => {
    createTodo("title 1", "desc 1");
    const updatedTodo = { desc: "desc redo" };
    expect(() => updateTodo(2, updatedTodo)).toThrow(errMsg);
  });

  test("delete existing todo", () => {
    createTodo("title 1", "desc 1");
    deleteTodo(1);
    expect(todos.length).toBe(0);
  });

  test("error delete ele not todo", () => {
    expect(() => deleteTodo(1)).toThrow(errMsg);
  });
});
