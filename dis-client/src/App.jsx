import React, { useState } from "react";

export default function DiscountCalculator() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch("http://localhost:8080/api-discount/calcular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount), discount: parseFloat(discount) }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Calculadora de Descuento</h1>

        <label className="block mb-2 font-medium">Cantidad:</label>
        <input
          type="number"
          step="0.01"
          className="w-full mb-4 p-2 border rounded-xl"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label className="block mb-2 font-medium">Descuento (%):</label>
        <input
          type="number"
          step="0.01"
          className="w-full mb-4 p-2 border rounded-xl"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Calcular
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-xl text-center">
            <p className="text-lg font-bold">Descuento Calculado:</p>
            <p className="text-2xl">${Number(result).toFixed(2)}</p>

            <p className="text-lg font-bold mt-4">Cantidad a pagar:</p>
            <p className="text-2xl">${(parseFloat(amount) - Number(result)).toFixed(2)}</p>
          </div>
        )} </div>
      </div>
    </>
  );
}
