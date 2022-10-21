
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const json = await res.json();


    return {
        breeds: Object.entries(json.message)
    };
};