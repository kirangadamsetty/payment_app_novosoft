function generateTransactions(count) {
  const names = [
    "Lisa", "John", "Amit", "Sara", "Michael", "Priya", "David", "Emma",
    "Rahul", "Sophia", "Daniel", "Ananya", "Chris", "Maya", "James", "Ishaan",
    "Oliver", "Neha", "Liam", "Arjun"
  ];

  const statuses = ["Pending", "Success", "Failed"];

  const transactions = Array.from({ length: count }, (_, i) => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    const randomDate = new Date(
      2020 + Math.floor(Math.random() * 6), 
      Math.floor(Math.random() * 12),    
      Math.floor(Math.random() * 28) + 1  
    ).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const randomAmount = "₹" + (Math.floor(Math.random() * 200000) + 100).toLocaleString("en-IN");

    return {
      id: i + 1,
      name: randomName,
      datetime: randomDate,
      account: "From",
      amount: randomAmount,
      status: randomStatus,
      details: "View",
    };
  });

  return transactions;
}

export const transitionsDetails = generateTransactions(100);

