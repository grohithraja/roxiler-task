import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const TransactionsBarChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      
      const response = await axios.get(`/api/chartData?month=${selectedMonth}`);
      setChartData({
       
      });
    };

    fetchChartData();
  }, [selectedMonth]);

  return <Bar data={chartData} />;
};

export default TransactionsBarChart;
