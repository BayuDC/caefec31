import { apiUrl } from '$lib/config';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    try {
        const res = await fetch(apiUrl + '/auth', {
            headers: { Cookie: event.request.headers.get('Cookie') },
            method: 'head',
        });

        if (!res.ok && event.url.pathname != '/auth') {
            return Response.redirect(event.url.origin + '/auth');
        }
        if (res.ok && event.url.pathname == '/auth') {
            return Response.redirect(event.url.origin);
        }

        return await resolve(event);
    } catch (err) {
        return new Response(`<h1 style="font-size: 40px">504: Can't connect to Waifuseum API</h1>`, {
            headers: { 'Content-type': 'text/html' },
            status: 504,
        });
    }
}
