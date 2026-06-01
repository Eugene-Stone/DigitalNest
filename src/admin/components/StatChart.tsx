type ChartItem = {
	label: string;
	count: number;
};

export default function StatChart({ items }: { items: ChartItem[] }) {
	const max = Math.max(...items.map((item) => item.count), 1);

	return (
		<div className="admin-chart">
			{items.length === 0 && <div className="admin-empty">No data yet</div>}
			{items.map((item) => (
				<div className="admin-chart-row" key={item.label}>
					<span>{item.label}</span>
					<div>
						<i style={{ width: `${Math.max((item.count / max) * 100, 6)}%` }} />
					</div>
					<b>{item.count}</b>
				</div>
			))}
		</div>
	);
}
