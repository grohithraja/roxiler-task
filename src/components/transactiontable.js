import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsTable = ({ selectedMonth, searchQuery }) => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTransactions = async () => {
      
      const response = await axios.get(`/api/transactions?month=${selectedMonth}&search=${searchQuery}&page=${currentPage}`);
      setTransactions(response.data);
    };

    fetchTransactions();
  }, [selectedMonth, searchQuery, currentPage]);

  return (
    <div>
      {}
    </div>
  );
};

export default TransactionsTable;
