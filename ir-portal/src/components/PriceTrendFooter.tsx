import React, { useEffect, useCallback, useRef } from 'react';
import * as echarts from 'echarts';

const PriceTrendFooter: React.FC = () => {
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  const initChart = useCallback(() => {
    const chartDom = document.getElementById('priceChart');
    if (!chartDom) return;

    // Dispose existing instance if any
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose();
    }

    const myChart = echarts.init(chartDom);
    chartInstanceRef.current = myChart;

    const option = {
      animation: false,
      title: {
        text: 'Price Trends',
        textStyle: { fontFamily: 'Inter', fontSize: 16 }
      },
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      yAxis: { type: 'value' },
      series: [{ data: [820, 932, 901, 934, 1290, 1330], type: 'line', smooth: true }]
    };

    myChart.setOption(option);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initChart();
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, [initChart]);

  return (
    <>
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <div id="priceChart" style={{ height: '400px' }}></div>
      </div>

    
    </>
  );
};

export default PriceTrendFooter;
