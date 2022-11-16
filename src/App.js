import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 2, 28) },
    { title: "New Desk (Wooden)", amount: 400, date: new Date(2022, 4, 12) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2022, 5, 1) },
    { title: "New TV", amount: 799.49, date: new Date(2022, 10, 10) },
  ];
  return (
    <div>
      <h2>Expense Traker App</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
