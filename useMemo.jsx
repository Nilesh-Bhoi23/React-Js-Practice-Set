import React, { useState, useMemo } from 'react';

function Fibonacci({ num }) {
  const computeFibonacci = (n) => {
    console.log('Calculating...');
    if (n <= 1) return n;
    return computeFibonacci(n - 1) + computeFibonacci(n - 2);
  };

  const result = useMemo(() => computeFibonacci(num), [num]);

  return <div>Fibonacci Result: {result}</div>;
}
