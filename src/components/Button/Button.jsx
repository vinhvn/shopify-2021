import React from 'react';

function Button() {
	return (
		<div className="flex flex-col h-full items-center bg-gray-200 text-gray-600">
			<div className="p-4 w-full md:w-3/4 md:mt-32">
				<div className="flex pb-6">
					<span className="text-5xl font-thin tracking-wider">
						The Shoppies
					</span>
				</div>
				<div className="flex flex-col p-6 shadow rounded-lg bg-white mb-6">
					<span className="text-md font-semibold pb-2">Movie Title</span>
					<div className="transition flex border py-3 px-4 rounded-lg focus-within:border-black focus-within:text-black">
						<input
							type="text"
							placeholder="Shawshank Redemption"
							className="flex w-full text-md focus:outline-none"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-6">
					<div className="flex flex-col p-6 shadow rounded-lg bg-white">
						<span className="text-xl font-semibold">No results found.</span>
					</div>
					<div className="flex flex-col p-6 shadow rounded-lg bg-white">
						<span className="text-xl font-semibold">Nominations</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Button;
