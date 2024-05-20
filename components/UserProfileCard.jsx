import Link from "next/link";
import React from "react";

const matchesData = [
	{
		id: 1,
		name: "John Doe",
		age: 28,
		location: "New York",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 2,
		name: "Jane Smith",
		age: 25,
		location: "Los Angeles",
		imageUrl:
			"https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 3,
		name: "Alice Johnson",
		age: 30,
		location: "Chicago",
		imageUrl:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 4,
		name: "Emily Johnson",
		age: 27,
		location: "Miami",
		imageUrl:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 5,
		name: "Michael Brown",
		age: 31,
		location: "Houston",
		imageUrl:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 6,
		name: "Sophia Martinez",
		age: 29,
		location: "San Francisco",
		imageUrl:
			"https://images.unsplash.com/photo-1551798507-629020c81463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHVzZXIlMjByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 7,
		name: "Daniel Wilson",
		age: 33,
		location: "Seattle",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
	{
		id: 8,
		name: "Olivia Taylor",
		age: 26,
		location: "Boston",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
	{
		id: 9,
		name: "William Thomas",
		age: 29,
		location: "Austin",
		imageUrl:
			"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
	{
		id: 10,
		name: "Emma Brown",
		age: 32,
		location: "Dallas",
		imageUrl:
			"https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
];

function getRandomImage() {
	const randomIndex = Math.floor(Math.random() * matchesData.length);
	return matchesData[randomIndex].imageUrl;
}

const UserProfileCard = ({ name, id }) => {
	const randomImageUrl = getRandomImage();

	return (
		<div
			style={{
				minWidth: "250px",
			}}
			className="max-w-sm mx-auto h-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
			<div className="border-b px-4 pb-6">
				<div className="text-center my-4">
					<img
						className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
						src={randomImageUrl}
						alt=""
					/>
					<div className="py-2">
						<h3 className="capitalize font-bold text-2xl text-gray-800 mb-1">
							{name}
						</h3>
						<div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
							<svg
								className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24">
								<path
									className=""
									d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
								/>
							</svg>
							New York, NY
						</div>
					</div>
				</div>
				<div className="flex gap-2 px-2">
					<Link className="w-full" href={"/matchings/" + id}>
						<button
							href={"/matchings/" + id}
							className="flex-1 w-full rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
							View
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserProfileCard;
