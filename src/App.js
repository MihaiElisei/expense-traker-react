import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 2, 28) },
    { title: "New Desk (Wooden)", amount: 400, date: new Date(2022, 4, 12) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2022, 5, 1) },
    { title: "New TV", amount: 799.49, date: new Date(2022, 10, 10) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
