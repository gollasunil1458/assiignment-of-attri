import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ContractCard from '../components/ContractCard';

export default function Dashboard() {
  const { data, loading, error } = useFetch('/contracts.json');
  const [search, setSearch] = useState('');

  const filteredContracts = data ? data.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.parties.toLowerCase().includes(search.toLowerCase())
  ) : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Contracts Dashboard</h1>
      <input type="text" placeholder="Search by name or parties"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full max-w-md" />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && filteredContracts.length === 0 && <p>No contracts found.</p>}
      {data && filteredContracts.map(contract => (
        <ContractCard key={contract.id} contract={contract} />
      ))}
    </div>
  );
}
