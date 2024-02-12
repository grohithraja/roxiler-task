import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsStatistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      
      const response = await axios.get(`/api/statistics?month=${selectedMonth}`);
      setStatistics(response.data);
    };

    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div>
      { }
    </div>
  );
};

export default TransactionsStatistics;
