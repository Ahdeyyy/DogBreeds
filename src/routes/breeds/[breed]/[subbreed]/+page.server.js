import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({params,fetch}) {
    const subbreed_image = await fetch(`https://dog.ceo/api/breed/${params.breed}/${params.subbreed}/images/random`);
    const image = await subbreed_image.json();

    if (image.status !== "success") {
        throw error(404, image.message);
    }




    return {
        props: {
            breed: params.breed,
            subbreed: params.subbreed,
            image: image.message
        }
    };
};