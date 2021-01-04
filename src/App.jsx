import React, { useState, useEffect } from 'react';
import { Search, PlusCircle, XCircle, Check } from 'react-feather';
import { getMoviesByTitle } from './util/movieService';

function App() {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);
	const [nominations, setNominations] = useState({});
	const [processing, setProcessing] = useState(false);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		// effect
		handleLoad();
		return () => {
			// cleanup
		};
	}, []);

	const handleSearch = e => {
		setSearch(e.target.value);
		handleQuery(e.target.value);
	};

	const handleQuery = async (query = search) => {
		if (search.length < 3) {
			return;
		}
		setProcessing(true);
		const res = await getMoviesByTitle(query);
		clearTimeout(timer);
		setTimer(
			setTimeout(() => {
				setProcessing(false);
			}, 2000)
		);
		if (res.Response === 'True') {
			setResults(res.Search);
		}
	};

	const handleNomination = movie => {
		// check if max
		if (Object.keys(nominations).length >= 5) {
			return;
		}
		// check if movie is already added
		for (let id in nominations) {
			if (id === movie.imdbID) {
				return;
			}
		}
		// else, add the movie
		let copy = { ...nominations };
		copy[movie.imdbID] = movie;
		setNominations(copy);
		handleSave(copy);
	};

	const handleDelete = id => {
		let copy = { ...nominations };
		delete copy[id];
		setNominations(copy);
		handleSave(copy);
	};

	const handleClearResults = () => {
		setResults([]);
		setSearch('');
	};

	const handleClearNominations = () => {
		setNominations([]);
		handleSave([]);
	};

	const handleSave = (noms = nominations) => {
		window.localStorage['nominations'] = JSON.stringify(noms);
	};

	const handleLoad = () => {
		if (window.localStorage['nominations']) {
			let noms = JSON.parse(window.localStorage['nominations']);
			setNominations(noms);
		}
	};

	const renderResults = list => {
		if (Array.isArray(list) && list.length && search.length >= 3) {
			let arr = [];
			for (let movie of list) {
				const movieInNoms = !!nominations[movie.imdbID];
				let divClass = 'flex flex-row items-center px-2 py-1 rounded-lg';
				divClass += movieInNoms
					? ' cursor-default'
					: ' cursor-pointer hover:bg-gray-100';
				arr.push(
					<div
						className={divClass}
						key={movie.imdbID}
						onClick={() => handleNomination(movie)}
					>
						{movieInNoms ? (
							<Check
								className="mr-2 flex-shrink-0"
								size={18}
								color="currentColor"
							/>
						) : (
							<PlusCircle
								className="mr-2 flex-shrink-0"
								size={18}
								color="currentColor"
							/>
						)}
						<span className="text-md" key={movie.imdbID}>
							{`${movie.Title} (${movie.Year})`}
						</span>
					</div>
				);
			}

			return (
				<div className="flex flex-col p-6 shadow-lg rounded-lg bg-white">
					<div className="flex flex-row pb-2 items-center justify-between">
						<span className="text-xl font-semibold font-serif">{`Results for "${search}"`}</span>
						<button
							className="transition px-5 py-2 font-serif font-bold text-sm text-sushi-500 bg-white rounded-full hover:bg-gray-100  active:bg-gray-300 focus:outline-none"
							onClick={() => handleClearResults()}
						>
							CLEAR
						</button>
					</div>

					{arr}
				</div>
			);
		}
		return (
			<div className="flex flex-col p-6 shadow-lg rounded-lg bg-white">
				<span className="text-xl font-semibold font-serif">
					No results found.
				</span>
			</div>
		);
	};

	const renderNominations = obj => {
		if (obj && Object.keys(obj).length > 0) {
			let arr = [];
			for (let id in obj) {
				let movie = nominations[id];
				arr.push(
					<div
						className="flex flex-row items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100"
						key={id}
						onClick={() => handleDelete(id)}
					>
						<XCircle
							className="mr-2 flex-shrink-0"
							size={18}
							color="currentColor"
						/>
						<span className="text-md">{`${movie.Title} (${movie.Year})`}</span>
					</div>
				);
			}
			return <div className="flex flex-col">{arr}</div>;
		}
		return <span className="text-md">You don't have any nominations yet!</span>;
	};

	const renderBanner = () => {
		let divClass =
			'transition transform flex w-full bg-melon-500 text-white font-serif font-bold rounded-lg shadow-lg p-6 mt-6';

		if (nominations && Object.keys(nominations).length < 5) {
			divClass += ' h-0 scale-0';
		}

		return <div className={divClass}>All nominations selected!</div>;
	};

	const renderLoader = () => {
		let divClass = 'transition animate-spin mr-3 w-6 h-6 text-sushi-500';

		if (!processing) {
			divClass += ' opacity-0';
		}

		return (
			<svg
				className={divClass}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		);
	};

	return (
		<div className="relative flex flex-col h-full items-center bg-white text-berry-500">
			<div className="p-4 w-full mt-12 md:max-w-5xl">
				<span className="flex text-4xl font-bold font-serif pb-6">
					The Shoppies 👑
				</span>
				<span className="flex text-xl pb-2">
					Select your top 5 favourite films to nominate for the upcoming
					Shoppies!
				</span>
				<span className="flex text-sm font-serif pb-6">
					Nominations are saved automatically so you won't lose your choices
					when you leave the site.
				</span>
				<div className="flex flex-col p-6 shadow-lg rounded-lg bg-white mb-6">
					<span className="text-xl font-semibold font-serif mb-3">
						Movie Title
					</span>
					<div className="transition flex py-3 px-4 mb-4 rounded-lg border-2 border-gray-200 bg-white text-gray-400 focus-within:border-sushi-500">
						<Search className="mr-2" size={24} color="currentColor" />
						<input
							type="text"
							placeholder="Shawshank Redemption"
							className="flex w-full text-md bg-transparent placeholder-gray-500 text-berry-500 focus:outline-none"
							value={search}
							onChange={handleSearch}
						/>
					</div>
					<div className="flex items-center justify-end">
						{renderLoader()}
						<button
							className="transition px-5 py-2 font-serif font-bold text-sm text-white bg-sushi-500 rounded-full hover:bg-sushi-600  active:bg-sushi-400 focus:outline-none"
							onClick={() => handleQuery()}
						>
							SEARCH
						</button>
					</div>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
					{renderResults(results)}
					<div className="flex flex-col p-6 shadow-lg rounded-lg bg-white mt-6 md:mt-0">
						<div className="flex flex-row pb-2 items-center justify-between">
							<span className="text-xl font-semibold font-serif">
								Nominations
							</span>
							<div className="flex flex-row">
								<button
									className="transition px-5 py-2 font-serif font-bold text-sm text-sushi-500 bg-white rounded-full hover:bg-gray-100  active:bg-gray-300 focus:outline-none"
									onClick={() => handleClearNominations()}
								>
									CLEAR
								</button>
								<button
									className="transition px-5 py-2 font-serif font-bold text-sm text-sushi-500 bg-white rounded-full hover:bg-gray-100  active:bg-gray-300 focus:outline-none"
									onClick={() => handleSave()}
								>
									SAVE
								</button>
							</div>
						</div>
						{renderNominations(nominations)}
					</div>
				</div>
				{renderBanner()}
			</div>
		</div>
	);
}

export default App;
