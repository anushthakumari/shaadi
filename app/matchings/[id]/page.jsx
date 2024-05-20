import React from "react";
import Link from "next/link";

import pool from "@/db";

const fetchUsers = async (user_id) => {
	try {
		const q =
			"SELECT * FROM users INNER JOIN user_profile ON users.user_id=user_profile.user_id WHERE users.user_id=$1";

		const { rows } = await pool.query(q, [user_id]);

		return rows[0]
			? rows[0]
			: {
					id: 1,
					name: "John Doe",
					age: 28,
					location: "New York",
					imageUrl:
						"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
			  };
	} catch (error) {
		return {
			id: 1,
			name: "John Doe",
			age: 28,
			location: "New York",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		};
	}
};

const Profile = async ({ params }) => {
	const user_id = params.id;

	const data = await fetchUsers(user_id);

	console.log(data);

	return (
		<div>
			<section className="self-stretch bg-crimson-100 flex flex-row items-start justify-center">
				<div className="p-2 w-full">
					<h2 className="text-19xl text-white">
						<Link href={"/"}>FYP</Link>
					</h2>
				</div>
			</section>
			<div className="bg-gray-100">
				<div className="container mx-auto py-8">
					<div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
						<div className="col-span-4 sm:col-span-3">
							<div className="bg-white shadow rounded-lg p-6">
								<div className="flex flex-col items-center">
									<img
										src={
											"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
										}
										alt="Profile"
										className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
									/>
									<h1 className="text-xl font-bold capitalize">{data.name}</h1>
									<p className="text-gray-700">{data.phone_number}</p>
									<p className="text-gray-700">{data.email}</p>
									<div className="mt-6 flex flex-wrap gap-4 justify-center">
										<a
											href="#"
											className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
											Contact
										</a>
									</div>
								</div>
								<hr className="my-6 border-t border-gray-300" />
								<div className="flex flex-col">
									<span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
										Lives in
									</span>
									<ul>
										<li className="mb-2">{data.city}</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-span-4 sm:col-span-9">
							<div className="bg-white shadow rounded-lg p-6">
								<h2 className="text-xl font-bold mb-4">About Me</h2>
								<p className="text-gray-700">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									finibus est vitae tortor ullamcorper, ut vestibulum velit
									convallis. Aenean posuere risus non velit egestas suscipit.
									Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
									in faucibus orci luctus et ultrices posuere cubilia Curae;
									Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
									luctus risus rhoncus id.
								</p>

								<h3 className="font-semibold text-center mt-3 -mb-2">
									Find me on
								</h3>
								<div className="flex justify-center items-center gap-6 my-6">
									<a
										className="text-gray-700 hover:text-orange-600"
										aria-label="Visit TrendyMinds LinkedIn"
										href="#"
										target="_blank">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
											className="h-6">
											<path
												fill="currentColor"
												d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
										</svg>
									</a>
									{/* Add other social media icons here */}
								</div>

								{/* <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
								<div className="mb-6">
									<div className="flex justify-between flex-wrap gap-2 w-full">
										<span className="text-gray-700 font-bold">
											Web Developer
										</span>
										<p>
											<span className="text-gray-700 mr-2">at ABC Company</span>
											<span className="text-gray-700">2017 - 2019</span>
										</p>
									</div>
									<p className="mt-2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										finibus est vitae tortor ullamcorper, ut vestibulum velit
										convallis. Aenean posuere risus non velit egestas suscipit.
									</p>
								</div> */}
								{/* Add other experience entries here */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
