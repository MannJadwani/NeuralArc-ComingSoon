'use client';

import { useEffect } from 'react';

interface BrainModelProps {
  setIsLoading: (loading: boolean) => void;
}

const BrainModel = ({ setIsLoading }: BrainModelProps) => {
  useEffect(() => {
    // Immediately set loading to false since we're not loading anything
    setIsLoading(false);
  }, [setIsLoading]);

  return <div className="w-full h-full" />;
};

export default BrainModel;