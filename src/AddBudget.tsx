import React, { useState } from "react";

function AddBudget() {
  const [budget, setBudget] = useState({
    totalAmount: "",
    categories: {
      food: "",
      transport: "",
      utilities: "",
      entertainment: "",
    },
  });

  const handleCategoryChange = (e: any) => {
    const { name, value } = e.target;
    setBudget({
      ...budget,
      categories: {
        ...budget.categories,
        [name]: value,
      },
    });
  };

  const handleTotalAmountChange = (e: any) => {
    setBudget({ ...budget, totalAmount: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending the budget data to the backend
    console.log("Monthly Budget Created:", budget);
    // Reset form
    setBudget({
      totalAmount: "",
      categories: {
        food: "",
        transport: "",
        utilities: "",
        entertainment: "",
      },
    });
  };

  return (
    <div className="form-container">
      <h2>Create Your Monthly Budget</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="totalAmount">Total Monthly Budget</label>
          <input
            type="number"
            id="totalAmount"
            value={budget.totalAmount}
            onChange={handleTotalAmountChange}
            required
          />
        </div>

        <h3>Set Spending Limits for Each Category</h3>
        <div className="form-group">
          <label htmlFor="food">Food</label>
          <input
            type="number"
            id="food"
            name="food"
            value={budget.categories.food}
            onChange={handleCategoryChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transport">Transport</label>
          <input
            type="number"
            id="transport"
            name="transport"
            value={budget.categories.transport}
            onChange={handleCategoryChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="utilities">Utilities</label>
          <input
            type="number"
            id="utilities"
            name="utilities"
            value={budget.categories.utilities}
            onChange={handleCategoryChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="entertainment">Entertainment</label>
          <input
            type="number"
            id="entertainment"
            name="entertainment"
            value={budget.categories.entertainment}
            onChange={handleCategoryChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Budget
        </button>
      </form>
    </div>
  );
}

export default AddBudget;
