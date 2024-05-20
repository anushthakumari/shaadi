import React from "react";
import Link from "next/link";

import pool from "@/db";

import UserProfileCard from "@/components/UserProfileCard";

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

const fetchUsers = async () => {
	try {
		const q = "SELECT * FROM users";
		const { rows } = await pool.query(q);
		return rows;
	} catch (error) {
		return matchesData;
	}
};

const Page = async () => {
	const users = await fetchUsers();

	return (
		<div className="h-full">
			<section className="self-stretch bg-crimson-100 flex flex-row items-start justify-center">
				<div className="p-2 w-full">
					<h2 className="text-19xl text-white">
						<Link href={"/"}>FYP</Link>
					</h2>
				</div>
			</section>
			<h2 className="p-4 text-19xl">
				Based on your preferences below are the recommendation
			</h2>
			<div className="p-4 flex gap-4 flex-row min-h-screen flex-wrap">
				{users.map((v, i) => (
					<div key={i} className="flex-1 basis-4">
						<UserProfileCard name={v.name} id={v.user_id} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
