"use client"
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    confetti({
      particleCount: 2000,
      spread: 960,
      origin: { y: 0.6 }
    });
  }, []);

  return null;
};

export default Confetti;
