/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Chart = () => {

    const categoris =useLoaderData()

    const totalDonates = categoris;
    const myDonates = JSON.parse(localStorage.getItem("donates"))
    // console.log(myDonates);
    // console.log(totalDonates);
    


    let remainingTotal = 0;
    let yourDonate;

    if(myDonates) {
        yourDonate = myDonates.length;
        remainingTotal = totalDonates.length - yourDonate;

    }
    else{
        remainingTotal = totalDonates.length;
    }



    const data = [
        { name: 'Total donation', value: remainingTotal },
        { name: 'Your donation', value: yourDonate },
        
      ];

    const COLORS = ['#0088FE', '#00C49F'];


    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
            );
    };

    return (
        <div className='md:w-[630px] md:h-[630px] py-16 mx-auto lg:mx-auto pb-40'>
            <ResponsiveContainer className='mx-auto w-full h-full' width="100%" height="100%">
        
        <PieChart className='mx-auto w-full h-full'>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        </div>
    );
    
    
};


export default Chart;