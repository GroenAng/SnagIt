import React from 'react';

const RecentDeals = () => {
  return (
    <section className="border rounded-lg p-6 bg-gray-100 shadow-md">
      <h2 className="text-2xl font-medium mb-4">🔥 Your Favorite Deals</h2>
      <ul className="space-y-2 list-disc list-inside">
        <li>🛒 Deal 1 - 20% off selected items</li>
        <li>🎁 Deal 2 - Buy 1 Get 1 Free</li>
        <li>🚚 Deal 3 - Free shipping on orders over $50</li>
      </ul>
    </section>
  );
};

export default RecentDeals;
