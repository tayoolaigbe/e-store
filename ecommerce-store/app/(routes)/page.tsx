import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard('311b23d1-be99-4be4-960d-7fcf65df331d');
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
			</div>
		</Container>
	);
};

export default HomePage;
