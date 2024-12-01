import React from 'react';
import { Button } from '@/components/ui/button'

const MyComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Rest of the form elements */}
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
};

export default MyComponent;

