export default function ContractCard({ contract }) {
  return (
    <div className="border p-4 mb-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{contract.name}</h2>
      <p><strong>Parties:</strong> {contract.parties}</p>
      <p><strong>Expiry:</strong> {contract.expiry}</p>
      <p><strong>Status:</strong> {contract.status}</p>
      <p><strong>Risk:</strong> {contract.risk}</p>
    </div>
  );
}
