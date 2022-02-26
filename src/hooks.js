import { apiUrl } from '$lib/config';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    if (event.url.pathname != '/auth') {
        const res = await fetch(apiUrl + '/auth', {
            headers: { Cookie: event.request.headers.get('Cookie') },
            method: 'head',
        });

        if (!res.ok) {
            return Response.redirect(event.url.origin + '/auth');
        }
    }

    return await resolve(event);
}
