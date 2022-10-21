import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ params,fetch }) {
    const breed_image = await fetch(`https://dog.ceo/api/breed/${params.breed}/images/random`);
    const breed_subbreeds = await fetch(`https://dog.ceo/api/breed/${params.breed}/list`);
    const subbreeds = await breed_subbreeds.json();
    const image = await breed_image.json();

    if (image.status !== "success") {
        throw error(404, image.message);
    }

    
    return {
        props: {
            breed: params.breed,
            image: image.message,
            subbreeds: subbreeds.message
        }
    };
};